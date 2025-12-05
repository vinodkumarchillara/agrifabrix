
import React from 'react';
import '../styles/WhatsAppChatWidget.css'; // We will update this file next

// You still need react-icons: npm install react-icons
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppChatWidget = () => {
  // Replace this with your full business WhatsApp number in international format
  // Example: '919876543210' for an Indian number
  const businessNumber = '917075483505'; // <--- IMPORTANT: Update this number

  return (
    <a
      href={`https://wa.me/${businessNumber}`}
      className="whatsapp-fab"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reach us on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
      <span className="button-text">Reach us</span> {/* Added text */}
      <span className="notification-dot">1</span>
    </a>
  );
};

export default WhatsAppChatWidget;