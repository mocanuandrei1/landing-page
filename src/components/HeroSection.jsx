import React from "react";
import { useMediaQuery } from "react-responsive";
import desktopImage from "../assets/images/DesktopHeroImage4.webp";
import mobileImage from "../assets/images/MobileHeroImage5.webp";
import CountdownTimer from "./HeroSectionCountdown";

const HeroSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const targetDate = new Date("2024-04-25T23:59:59");

  return (
    <section>
      <img src={isMobile ? mobileImage : desktopImage} alt="Pompe de Caldura" />
      {isMobile && (
        <div className="bg-energy-pink text-center py-4">
          <a href="#redirectButtonLanding">
            <button className="px-6 py-3 min-[450px]:text-2xl min-[550px]:text-4xl  bg-energy-blue text-white rounded-lg font-['Jost-Bold'] text-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              CERE OFERTA ACUM
            </button>
          </a>
        </div>
      )}
      <CountdownTimer targetDate={targetDate} />
    </section>
  );
};

export default HeroSection;
