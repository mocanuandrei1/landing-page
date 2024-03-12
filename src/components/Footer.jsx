import React from "react";
import PhoneIcon from "../assets/icons/phone-line-icon.svg?react";
import logo from "../assets/images/header/logo.webp";

const Footer = () => {
  return (
    <footer className="shadow-[0_-10px_15px_-3px_rgb(0,0,0,0.1)] relative">
      <div className="m-auto max-w-screen-3xl p-5">
        <img src={logo} />
        <div className=" gap-2 mx-[30px] text-sm flex flex-col my-5">
          <a
            href="tel:0744972001 "
            className=" hover:text-blue-700 text-energy-blue font-['Jost-Bold'] text-lg items-center hidden md:flex max-w-fit"
          >
            <span>
              <PhoneIcon />
            </span>
            <span>+40 744 972 001 </span>
          </a>
          <a
            href="https://www.abcenergy.ro/politica-de-confidentialitate"
            className=" hover:text-energy-blue max-w-fit"
          >
            Politica de confidențialitate
          </a>
          <a
            href="https://www.abcenergy.ro/politica-de-cookies"
            className=" hover:text-energy-blue max-w-fit"
          >
            Cookie-uri
          </a>
          <a
            href="https://anpc.ro/ce-este-sal/"
            className=" hover:text-energy-blue max-w-fit"
          >
            ANPC
          </a>
        </div>
        <p>Copyright @2024 ABC ENERGY. Toate drepturile rezervate.</p>
      </div>
    </footer>
  );
};

export default Footer;
