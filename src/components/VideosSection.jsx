import React from "react";
import "../assets/styles/VideosSection.css";

const VideosSection = () => {
  return (
    <section className="sectiune-video landingPageSection">
      <div className="sectiune-video-headings">
        <h2 className="landingHeadingsText">
          VREI O SOLUȚIE OPTIMĂ PENTRU LOCUINȚA TA?
        </h2>
        <h2 className="landingHeadingsText">
          AFLĂ CE SPUNE{" "}
          <span className="span-sectiune-video">UN SPECIALIST!</span>
        </h2>
      </div>
      <div className="sectiuneVideoclipuri">
        <div className="videoSectiune video1">
          <div className="sectiune-titlu-video">
            <h3 className="titlu-video">CUM FUNCȚIONEAZĂ</h3>
            <h3 className="titlu-video">POMPELE DE CĂLDURĂ?</h3>
          </div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/xSJcdy-NgFM"
              allowFullScreen
              type="text/html"
            ></iframe>
          </div>
        </div>
        <div className="sageata1">
          <div className="sageata">
            <img
              width="100"
              height="100"
              src="https://gomagcdn.ro/domains2/abcenergy.ro/files/product/large/poze-landing-366971.png"
              alt="arrow"
            />
          </div>
        </div>
        <div className="videoSectiune video2">
          <div className="sectiune-titlu-video">
            <h3 className="titlu-video">CUM SĂ ALEG POMPA</h3>
            <h3 className="titlu-video">DE CĂLDURĂ POTRIVITĂ?</h3>
          </div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/4KzwOoMYIRM"
              allowFullScreen
              type="text/html"
            ></iframe>
          </div>
        </div>
        <div className="sageata2">
          <div className="sageata">
            <img
              width="100"
              height="100"
              src="https://gomagcdn.ro/domains2/abcenergy.ro/files/product/large/poze-landing-169401.png"
              alt="arrow"
            />
          </div>
        </div>
        <div className="videoSectiune video3">
          <div className="sectiune-titlu-video">
            <h3 className="titlu-video">DE CE SĂ ALEG POMPELE</h3>
            <h3 className="titlu-video">DE CĂLDURĂ ARISTON?</h3>
          </div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/o9cKOlwIxUk"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="sageata3">
          <div className="sageata">
            <img
              width="100"
              height="100"
              src="https://gomagcdn.ro/domains2/abcenergy.ro/files/product/large/poze-landing-777001.png"
              alt="arrow"
            />
          </div>
        </div>
        <div className="videoSectiune video4">
          <div className="sectiune-titlu-video">
            <h3 className="titlu-video">CUM SE MONTEAZĂ</h3>
            <h3 className="titlu-video">POMPA DE CĂLDURĂ?</h3>
          </div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/-K_oLsvO7vM"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="sageata4">
          <div className="sageata sageata4">
            <img
              width="100"
              height="100"
              src="https://gomagcdn.ro/domains2/abcenergy.ro/files/product/large/poze-landing-831098.png"
              alt="arrow"
            />
          </div>
        </div>
        <div className="videoSectiune video5">
          <div className="sectiune-titlu-video">
            <h3 className="titlu-video">CUM PRELUNGESC VIAȚA</h3>
            <h3 className="titlu-video">POMPEI DE CĂLDURĂ?</h3>
          </div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/ke4goJJlj7o"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
