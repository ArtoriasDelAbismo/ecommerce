import React from "react";
import "./WhatsAppButton.css";
import whatsappIcon from "../assets/whatsapp-icon.png";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "543425145911";
    const message = "Hola, estoy interesado en un producto";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button className="whatsapp-button" onClick={handleWhatsAppClick}>
      <img src={whatsappIcon} alt="WhatsApp" />
    </button>
  );
};

export default WhatsAppButton;
