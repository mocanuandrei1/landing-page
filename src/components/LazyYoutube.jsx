import React, { useState } from "react";
import YouTube from "react-youtube";
import YoutubeIcon from "../assets/icons/youtube-icon.svg?react";

const LazyYoutube = (props) => {
  const [showVideo, setShowVideo] = useState(false);
  const { videoId, videoImage, videoImageAlt } = props;

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="w-full p-2" onClick={handleClick}>
      {showVideo && (
        <YouTube
          className="w-full h-full"
          videoId={videoId}
          opts={opts}
          allowFullScreen
        />
      )}
      {!showVideo && (
        <>
          <img
            className="h-[250px] w-full object-cover"
            src={videoImage}
            alt={videoImageAlt}
          />
          <div className=" absolute">
            <YoutubeIcon />
          </div>
        </>
      )}
    </div>
  );
};

export default LazyYoutube;
