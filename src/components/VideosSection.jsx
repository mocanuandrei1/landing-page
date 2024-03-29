import React from "react";
import "../assets/styles/VideosSection.css";
import sageata1 from "../assets/images/video-section/poze-landing-169401.webp";
import sageata2 from "../assets/images/video-section/poze-landing-366971.webp";
import sageata3 from "../assets/images/video-section/poze-landing-777001.webp";
import sageata4 from "../assets/images/video-section/poze-landing-831098.webp";
import videoImage1 from "../assets/images/video-section/videoImage1.webp";
import videoImage2 from "../assets/images/video-section/videoImage2.webp";
import videoImage3 from "../assets/images/video-section/videoImage3.webp";
import videoImage4 from "../assets/images/video-section/videoImage4.webp";
import videoImage5 from "../assets/images/video-section/videoImage5.webp";
import LazyYoutube from "./LazyYoutube";

const VideosSection = () => {
  return (
    <section className="sectiune-video landingPageSection">
      <div className="sectiune-video-headings">
        <h2 className="mb-2">VREI O SOLUȚIE OPTIMĂ PENTRU LOCUINȚA TA?</h2>
        <h2>
          AFLĂ CE SPUNE{" "}
          <span className="span-sectiune-video">SPECIALISTUL ARISTON!</span>
        </h2>
      </div>
      <div className="sectiuneVideoclipuri">
        <div className="videoSectiune video1">
          <div className="sectiune-titlu-video">
            <h3 className="titlu-video">CUM FUNCȚIONEAZĂ</h3>
            <h3 className="titlu-video">POMPELE DE CĂLDURĂ?</h3>
          </div>
          <LazyYoutube
            videoId="xSJcdy-NgFM"
            videoImage={videoImage1}
            videoImageAlt="Cum functioneaza pompele de caldura?"
          />
        </div>
        <div className="sageata1">
          <div className="sageata">
            <img width="100" height="100" src={sageata1} alt="frunze" />
          </div>
        </div>
        <div className="videoSectiune video2">
          <div className="sectiune-titlu-video">
            <h3 className="titlu-video">CUM SĂ ALEG POMPA</h3>
            <h3 className="titlu-video">DE CĂLDURĂ POTRIVITĂ?</h3>
          </div>
          <LazyYoutube
            videoId="4KzwOoMYIRM"
            videoImage={videoImage2}
            videoImageAlt="Cum sa aleg pompa de caldura potrivita?"
          />
        </div>
        <div className="sageata2">
          <div className="sageata">
            <img width="100" height="100" src={sageata2} alt="frunze" />
          </div>
        </div>
        <div className="videoSectiune video3">
          <div className="sectiune-titlu-video">
            <h3 className="titlu-video">DE CE SĂ ALEG POMPELE</h3>
            <h3 className="titlu-video">DE CĂLDURĂ ARISTON?</h3>
          </div>
          <LazyYoutube
            videoId="o9cKOlwIxUk"
            videoImage={videoImage3}
            videoImageAlt="De ce sa aleg pompele de caldura ariston?"
          />
        </div>
        <div className="sageata3">
          <div className="sageata">
            <img width="100" height="100" src={sageata3} alt="frunze" />
          </div>
        </div>
        <div className="videoSectiune video4">
          <div className="sectiune-titlu-video">
            <h3 className="titlu-video">CUM SE MONTEAZĂ</h3>
            <h3 className="titlu-video">POMPA DE CĂLDURĂ?</h3>
          </div>
          <LazyYoutube
            videoId="-K_oLsvO7vM"
            videoImage={videoImage4}
            videoImageAlt="Cum se monteaza pompa de caldura?"
          />
        </div>
        <div className="sageata4">
          <div className="sageata sageata4">
            <img width="100" height="100" src={sageata4} alt="frunze" />
          </div>
        </div>
        <div className="videoSectiune video5">
          <div className="sectiune-titlu-video">
            <h3 className="titlu-video">CUM PRELUNGESC VIAȚA</h3>
            <h3 className="titlu-video">POMPEI DE CĂLDURĂ?</h3>
          </div>
          <LazyYoutube
            videoId="ke4goJJlj7o"
            videoImage={videoImage5}
            videoImageAlt="Cum prelungesc viata pompei de caldura?"
          />
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
