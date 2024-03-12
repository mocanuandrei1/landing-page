import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../assets/styles/CertificationSection.css";
import document1 from "../assets/images/document-section/document1.webp";
import document2 from "../assets/images/document-section/document2.webp";
import document3 from "../assets/images/document-section/document3.webp";
import document4 from "../assets/images/document-section/document4.webp";
import document5 from "../assets/images/document-section/document5.webp";
import document6 from "../assets/images/document-section/document6.webp";
import document7 from "../assets/images/document-section/document7.webp";
import document8 from "../assets/images/document-section/document8.webp";
import document9 from "../assets/images/document-section/document9.webp";
import document10 from "../assets/images/document-section/document10.webp";
import document11 from "../assets/images/document-section/document11.webp";

const CertificationSection = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1536 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
    desktopSmaller: {
      breakpoint: { max: 1536, min: 1280 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1280, min: 768 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section className="landingPageSection text-center">
      <div>
        <h2 className="pb-4">SUNTEM MÂNDRI DE UN PORTOFOLIU LARG DE</h2>
        <h2>CERTIFICĂRI ISO, AUTORIZAȚII ISCIR, ANRE, AGFR</h2>
      </div>
      <Carousel
        draggable={true}
        swipeable={true}
        responsive={responsive}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          <img src={document1} alt="Autorizatie" />
        </div>
        <div>
          <img src={document2} alt="Autorizatie" />
        </div>
        <div>
          <img src={document3} alt="Autorizatie" />
        </div>
        <div>
          <img src={document4} alt="Autorizatie" />
        </div>
        <div>
          <img src={document5} alt="Autorizatie" />
        </div>
        <div>
          <img src={document6} alt="Autorizatie" />
        </div>
        <div>
          <img src={document7} alt="Autorizatie" />
        </div>
        <div>
          <img src={document8} alt="Autorizatie" />
        </div>
        <div>
          <img src={document9} alt="Autorizatie" />
        </div>
        <div>
          <img src={document10} alt="Autorizatie" />
        </div>
        <div>
          <img src={document11} alt="Autorizatie" />
        </div>
      </Carousel>
    </section>
  );
};
export default CertificationSection;
