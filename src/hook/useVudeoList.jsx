import { useEffect, useState } from "react";
import {
  getDatabase,
  orderByKey,
  query,
  ref,
  get,
  startAt,
  limitToFirst,
} from "firebase/database";

const useVudeoList = (page) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [videos, setvideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      //database releted work

      const db = getDatabase();
      const videosRef = ref(db, "videos");
      const videoQuery = query(
        videosRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(8)
      );

      try {
        setError(false);
        setLoading(true);
        //request firebase database

        const snapshot = await get(videoQuery);
        setLoading(false);

        if (snapshot.exists()) {
          setvideos((prevVideos) => {
            return [...prevVideos, ...Object.values(snapshot.val())];
          });
        } else {
          setHasMore(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    fetchVideos();
  }, [page]);

  return {
    loading,
    error,
    videos,
    hasMore,
  };
};

export default useVudeoList;
