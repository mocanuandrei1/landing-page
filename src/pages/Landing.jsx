import React from "react";
import HeroSection from "../components/HeroSection";
import PartenersSection from "../components/PartenersSection";
import CTASection from "../components/CTASection";
import VideosSection from "../components/VideosSection";
import CardsSection from "../components/CardsSection";
import CertificationSection from "../components/CertificationSection";
import ContactForm from "../components/ContactForm";
import ButtonCTA from "../components/ButtonCTA";

const Landing = () => {
  return (
    <div className="max-w-screen-3xl m-auto">
      <HeroSection />
      <PartenersSection />
      <CTASection />
      <ButtonCTA text="PROGRAMEAZĂ GRATUIT O EVALUARE A LOCUINȚEI!" />
      <VideosSection />
      <CardsSection />
      <ButtonCTA text="COMPLETEAZĂ FORMULARUL ACUM!" />
      <CertificationSection />
      <ContactForm />
    </div>
  );
};

export default Landing;
