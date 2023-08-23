import Video from "./Video";
import classes from "../styles/Videos.module.css";
import { Link } from "react-router-dom";
import useVudeoList from "../hook/useVudeoList";

const Videos = () => {
  const { loading, error, videos } = useVudeoList();
  return (
    <div className={classes.videos}>
      {videos.length > 0 &&
        videos.map((video) => (
          <Link to="/quiz" key={video.youtubeID}>
            <Video title={video.title} id={video.youtubeID} noq={video.noq} />
          </Link>
        ))}
      {!loading && videos.length === 0 && (
        <div className="">No data found!</div>
      )}
      {error && <div className="">There was an error</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default Videos;
