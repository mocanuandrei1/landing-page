import React from "react";
import LazyYoutube from "../LazyYoutube";
import videoImage1 from "../../assets/images/video-section/videoImage1.webp";

const VideoComponent = (props) => {
  return (
    <div className={props.className}>
      <div>
        <div>
          <h3>{props.text1}</h3>
          <h3>{props.text2}</h3>
        </div>
        <div>
          <LazyYoutube
            videoId={props.videoId}
            videoImage={videoImage1}
            videoImageAlt={props.videoImageAlt}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
