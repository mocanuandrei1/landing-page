import React, { useEffect } from "react";
import FreeIcon from "../assets/icons/free-icon.svg?react";
import SupportIcon from "../assets/icons/support-icon.svg?react";
import MontajIcon from "../assets/icons/montaj-icon.svg?react";
import SaleIcon from "../assets/icons/sale-icon.svg?react";
import WarrantyIcon from "../assets/icons/warranty-icon.svg?react";
import "../assets/styles/CardsSection.css";

const CardsSection = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".dot-navigation a");
    const container = document.querySelector(".landing-servicii-container");

    links.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });

    container.addEventListener("scroll", updateActiveDot);

    // Highlight initial dot
    const initialDot = document.querySelector(".dot-navigation a");
    initialDot.classList.add("activeDot");

    return () => {
      // Clean up event listeners when component unmounts
      links.forEach((link) => {
        link.removeEventListener("click", smoothScroll);
      });
      container.removeEventListener("scroll", updateActiveDot);
    };
  }, []); // Empty dependency array ensures this effect only runs once on mount

  function smoothScroll(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    const targetIndex = Array.from(container.children).indexOf(targetSection);
    const targetPosition = targetIndex * container.offsetWidth;

    container.scrollTo({
      left: targetPosition,
      behavior: "smooth",
    });

    updateActiveDot();
  }

  function updateActiveDot() {
    const scrollPosition = document.querySelector(
      ".landing-servicii-container"
    ).scrollLeft;
    const sectionWidth = document.querySelector(
      ".landing-servicii-container"
    ).offsetWidth;
    const currentSectionIndex = Math.floor(
      (scrollPosition + sectionWidth / 2) / sectionWidth
    );

    const links = document.querySelectorAll(".dot-navigation a");

    // Remove the active class from all dots
    links.forEach((link) => {
      link.classList.remove("activeDot");
    });

    // Add the active class to the dot corresponding to the current section
    links[currentSectionIndex].classList.add("activeDot");
  }

  return (
    <section className="landingPageSection text-center px-5">
      <h2 className="md:mb-10">DE CE SĂ ALEGI ABC ENERGY ?</h2>
      <div className="landing-servicii-container">
        <div className="landing-serviciu-container" id="section1">
          <div className="icon-container">
            <FreeIcon />
          </div>
          <h3 className="text-xl">EVALUARE GRATUITĂ</h3>
          <p className="text-energy-grey">
            Venim la tine acasă pentru a te ghida cât mai eficient.
          </p>
        </div>
        <div className="landing-serviciu-container" id="section2">
          <div className="icon-container">
            <SupportIcon />
          </div>
          <h3 className="text-xl">SUPORT PE TOT PARCURSUL PROCESULUI</h3>
          <p className="text-energy-grey">
            De la consultarea locației până la finalizarea lucrării.
          </p>
        </div>
        <div className="landing-serviciu-container" id="section3">
          <div className="icon-container">
            <MontajIcon />
          </div>
          <h3 className=" text-xl">MONTAJ OPȚIONAL</h3>
          <p className="text-energy-grey">
            Se face la alegerea clientului, contra cost.
          </p>
        </div>
        <div className="landing-serviciu-container" id="section4">
          <div className="icon-container">
            <SaleIcon />
          </div>
          <h3 className="text-xl">ECONOMII ȘI COSTURI REDUSE</h3>
          <p className="text-energy-grey">
            Eficientizarea consumului de energie = Facturi reduse.
          </p>
        </div>
        <div className="landing-serviciu-container" id="section5">
          <div className="icon-container">
            <WarrantyIcon />
          </div>
          <h3 className=" text-xl">GARANȚIE 3 ANI</h3>
          <p className="text-energy-grey">
            Garanția este acordată de către producător.
          </p>
        </div>
      </div>
      <nav className="dot-navigation">
        <a href="#section1"></a>
        <a href="#section2"></a>
        <a href="#section3"></a>
        <a href="#section4"></a>
        <a href="#section5"></a>
      </nav>
    </section>
  );
};

export default CardsSection;
