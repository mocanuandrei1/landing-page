import React from "react";
import PhoneIcon from "../assets/icons/phone-mobile-icon.svg?react";
import WhatsAppIcon from "../assets/icons/whatsapp-icon.svg?react";
import "../assets/styles/MobileButtons.css";

const MobileFooter = () => {
  return (
    <div class="buttons-container">
      <a href="tel:0744972001 ">
        <button class="button phone">
          <PhoneIcon />
          <p>Telefon</p>
        </button>
      </a>
      <a href="https://wa.me/+40744972001">
        <button class="button whatsapp">
          <WhatsAppIcon />
          <p>WhatsApp</p>
        </button>
      </a>
    </div>
  );
};

export default MobileFooter;
