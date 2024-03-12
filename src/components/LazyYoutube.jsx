import React, { useState } from "react";
import YouTube from "react-youtube";
import YoutubeIcon from "../assets/icons/youtube-icon.svg?react";

const LazyYoutube = (props) => {
  const [showVideo, setShowVideo] = useState(false);
  const { videoId, videoImage, videoImageAlt } = props;

  const handleClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="w-full" onClick={handleClick}>
      {showVideo && (
        <YouTube className="w-full" videoId={videoId} allowFullScreen />
      )}
      {!showVideo && (
        <div>
          <img src={videoImage} alt={videoImageAlt} />
          <div className=" absolute">
            <YoutubeIcon />
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyYoutube;
