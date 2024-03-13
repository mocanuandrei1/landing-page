import React from "react";
import sageata1 from "../../assets/images/video-section/poze-landing-169401.webp";
import sageata2 from "../../assets/images/video-section/poze-landing-366971.webp";
import sageata3 from "../../assets/images/video-section/poze-landing-777001.webp";
import sageata4 from "../../assets/images/video-section/poze-landing-831098.webp";
import videoImage1 from "../../assets/images/video-section/videoImage1.webp";
import VideoComponent from "./VideoComponent";

const VideosSection2 = () => {
  return (
    <div className="grid lx:grid-cols-11 xl:grid-rows-[minmax(200px,_1fr)_100px_600px]">
      <VideoComponent
        text1="CUM FUNCȚIONEAZĂ"
        text2="POMPELE DE CĂLDURĂ?"
        videoId="xSJcdy-NgFM"
        className="xl:col-span-3 xl:col-start-1"
        videoImage={videoImage1}
        videoImageAlt="Cum functioneaza pompele de caldura?"
      />
      <div className="xl:col-start-4 xl:col-span-1">
        <div>
          <img width="100" height="100" src={sageata1} alt="frunze" />
        </div>
      </div>
      <VideoComponent
        text1="CUM SĂ ALEG POMPA"
        text2="DE CĂLDURĂ POTRIVITĂ?"
        videoId="4KzwOoMYIRM"
        className="xl:col-span-3 xl:col-start-5"
        videoImage={videoImage1}
        videoImageAlt="Cum sa aleg pompa de caldura potrivita?"
      />
      <div className="xl:col-start-8 xl:col-span-1">
        <div>
          <img width="100" height="100" src={sageata2} alt="frunze" />
        </div>
      </div>
      <VideoComponent
        text1="DE CE SĂ ALEG POMPELE"
        text2="DE CĂLDURĂ ARISTON?"
        videoId="o9cKOlwIxUk"
        className="xl:col-span-3 xl:col-start-9"
        videoImage={videoImage1}
        videoImageAlt="De ce sa aleg pompele de caldura ariston?"
      />
      <div className="xl:row-start-2 xl:col-start-11">
        <div>
          <img width="100" height="100" src={sageata3} alt="frunze" />
        </div>
      </div>
      <VideoComponent
        text1="CUM SE MONTEAZĂ"
        text2="POMPA DE CĂLDURĂ?"
        videoId="-K_oLsvO7vM"
        videoImage={videoImage1}
        className="xl:col-span-3 xl:col-start-9 xl:row-start-3"
        videoImageAlt="Cum se monteaza pompa de caldura?"
      />
      <div className="xl:row-start-3 xl:col-start-8">
        <div>
          <img width="100" height="100" src={sageata4} alt="frunze" />
        </div>
      </div>
      <VideoComponent
        text1="CUM PRELUNGESC VIAȚA"
        text2="POMPEI DE CĂLDURĂ?"
        videoId="ke4goJJlj7o"
        className="xl:col-span-3 xl:col-start-5 xl:row-start-3"
        videoImage={videoImage1}
        videoImageAlt="Cum prelungesc viata pompei de caldura?"
      />
    </div>
  );
};

export default VideosSection2;
