import Video from "./Video";

import { Link } from "react-router-dom";
import useVudeoList from "../hook/useVudeoList";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Videos = () => {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVudeoList(page);

  return (
    <div>
      <InfiniteScroll
        dataLength={videos.length}
        hasMore={hasMore}
        next={() => setPage(page + 8)}
      >
        {videos.length > 0 &&
          videos.map((video) =>
            video.noq > 0 ? (
              <Link to="/quiz" key={video.youtubeID}>
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </Link>
            ) : (
              <Video
                title={video.title}
                id={video.youtubeID}
                noq={video.noq}
                key={video.youtubeID}
              />
            )
          )}
      </InfiniteScroll>
      {!loading && videos.length === 0 && (
        <div className="">No data found!</div>
      )}
      {error && <div className="">There was an error</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default Videos;
