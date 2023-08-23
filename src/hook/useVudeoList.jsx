import { useEffect, useState } from "react";
import { getDatabase, orderByKey, query, ref, get } from "firebase/database";

const useVudeoList = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    async function fetchVideos() {
      //database releted work

      const db = getDatabase();
      const videosRef = ref(db, "videos");
      const videoQuery = query(videosRef, orderByKey());

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
          //
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    fetchVideos();
  }, []);

  return {
    loading,
    error,
    videos,
  };
};

export default useVudeoList;
