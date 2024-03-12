import React from "react";
import { useMediaQuery } from "react-responsive";
import desktopImage from "../assets/images/DesktopHeroImage2.webp";
import mobileImage from "../assets/images/MobileHeroImage2.webp";
import CountdownTimer from "./HeroSectionCountdown";

const HeroSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const targetDate = new Date("2024-04-25T23:59:59");

  return (
    <section>
      <img src={isMobile ? mobileImage : desktopImage} alt="Pompe de Caldura" />
      <CountdownTimer targetDate={targetDate} />
    </section>
  );
};

export default HeroSection;
