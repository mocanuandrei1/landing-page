import React from "react";
import aristonLogo from "../assets/images/ariston.webp";
import elcoLogo from "../assets/images/elco.webp";

const PartenersSection = () => {
  return (
    <section className="landingPageSection">
      <h2 className="text-center tracking-wider mb-10">PARTENERI OFICIALI</h2>
      <div className="flex justify-around gap-10 md:gap-20 items-center flex-wrap md:flex-nowrap my-10 md:my-20">
        <div className="md:basis-1/2 basis-full flex items-center justify-center">
          <img
            className="max-w-[50%]"
            src={aristonLogo}
            alt="Ariston"
            title="Ariston"
          />
        </div>
        <div className="md:basis-1/2 basis-full flex items-center justify-center">
          <img className="max-w-[50%]" src={elcoLogo} alt="ELCO" title="ELCO" />
        </div>
      </div>
    </section>
  );
};

export default PartenersSection;
