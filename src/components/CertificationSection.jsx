import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../assets/styles/CertificationSection.css";

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
        draggable={false}
        responsive={responsive}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          <img
            src="https://gomagcdn.ro/domains2/abcenergy.ro/files/files/certificat-iso-14001-11492.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://gomagcdn.ro/domains2/abcenergy.ro/files/files/certificat-iso-45001-109869.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://gomagcdn.ro/domains2/abcenergy.ro/files/files/certificat-iso-9001-86836.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://gomagcdn.ro/domains2/abcenergyro/files/files/1-autorizatie-iscir-pt-a1-scaled-228956.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://gomagcdn.ro/domains2/abcenergyro/files/files/7-autorizatie-iscir-pt-c9-scaled-18962.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://gomagcdn.ro/domains2/abcenergyro/files/files/9-autorizatie-iscir-pt-c11-scaled-947851.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://gomagcdn.ro/domains2/abcenergyro/files/files/1wjkiy-v-966207.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://gomagcdn.ro/domains2/abcenergyro/files/files/11-autorizatie-anre-gaze-tip-edib-scaled-59660.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://gomagcdn.ro/domains2/abcenergyro/files/files/12-autorizatie-anre-gaze-tip-pdib-scaled-989020.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://gomagcdn.ro/domains2/abcenergyro/files/files/13-autorizatie-anre-electrice-04-kw-scaled-358038.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://gomagcdn.ro/domains2/abcenergy.ro/files/files/atestare-elco-pt-abc-control-1-708614.png"
            alt=""
          />
        </div>
      </Carousel>
    </section>
  );
};
export default CertificationSection;
