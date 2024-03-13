import React from "react";
import PhoneIcon from "../assets/icons/phone-mobile-icon.svg?react";
import WhatsAppIcon from "../assets/icons/whatsapp-icon.svg?react";
import "../assets/styles/MobileButtons.css";

const MobileFooter = () => {
  return (
    /*
    <div class=" fixed bottom-0 left-1/2 translate-x-[-50%] flex w-full bg-white items-center justify-between flex-nowrap z-50">
      <a href="tel:0744972001" className="w-1/2">
        <button class="border-0 text-[16px] flex w-full items-center justify-center flex-nowrap gap-1 h-[6vh]">
          <PhoneIcon />
          <p>Telefon</p>
        </button>
      </a>
      <a href="https://wa.me/+40721205728" className="w-1/2">
        <button class="button whatsapp">
          <WhatsAppIcon />
          <p>WhatsApp</p>
        </button>
      </a>
    </div>
    */
    <div class="buttons-container">
      <a href="tel:0744972001 ">
        <button class="button phone">
          <PhoneIcon />
          <p>Telefon</p>
        </button>
      </a>
      <a href="https://wa.me/+40721205728">
        <button class="button whatsapp">
          <WhatsAppIcon />
          <p>WhatsApp</p>
        </button>
      </a>
    </div>
  );
};

export default MobileFooter;
