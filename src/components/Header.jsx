import React from "react";
import PhoneIcon from "../assets/icons/phone-line-icon.svg?react";

const Header = () => {
  return (
    <div className="py-5 shadow-lg z-50 relative">
      <div className="m-auto max-w-screen-3xl flex items-center md:justify-between justify-center">
        <img
          src="https://gomagcdn.ro/domains2/abcenergy.ro/files/company/logo1136.png"
          alt="ABC Energy"
        />
        <div>
          <a
            href="tel:0744972001"
            className="md:mr-5 hidden md:flex md:items-center md:justify-end "
          >
            <span className="text-energy-blue">
              <PhoneIcon />
            </span>
            <span className="text-energy-blue font-['Jost-Bold'] ">
              +40 744 972 001
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
