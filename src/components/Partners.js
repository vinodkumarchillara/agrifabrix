
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Partner.css";
import { useLang } from "../components/LangContext"; // 👈 Import the custom hook

import Ag from "../images/AgriTech.jpg";
import fpo from "../images/FPO.jpeg";
import fin from "../images/Bank.jpg";

// // Partner logos
import logo1 from "../images/capsber.png";
import logo2 from "../images/infarmsys.jpg";
import logo3 from "../images/dibbble.png";
import logo4 from "../images/aigenix.png";
import logo5 from "../images/fin.png";
import logo6 from "../images/nyasta.png";
import logo7 from "../images/yk.png";
import logo8 from "../images/osc.png";
import logo9 from "../images/bal.png";
import logo10 from "../images/rukart.png";
import logo11 from "../images/viswa.png";
import logo12 from "../images/efpolymer.png";
import WhatsAppChatWidget from "./WhatsAppChatWidget"; // Import the WhatsApp widget
import Climate from "./Climate"

const Partners = () => {
  const { t } = useLang(); // 👈 Access the global translation function
  const navigate = useNavigate();

  // Logos and links remain static
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12
  ];
  const partnerLinks = [
    "https://capsber.com/",
    "https://farmsys.co/",
    "https://dibbleag.com/",
    "https://www.ai-genix.net/",
    "https://finozen.co.in/",
    "https://nyasta.in/",
    "https://yklaboratories.com/",
    "https://oscillomachines.com/",
    "https://www.balwaan.in/",
    "https://rukart.co/",
    "https://www.vishwaagrotech.com/",
    "https://efpolymer.com/",
  ];

  return (
    <div className="contain">
      {/* ===== Header ===== */}
      <div className="header-container">
        <h1>{t("partner_header_title")}</h1>
        <p>{t("partner_header_subtitle")}</p>
      </div>

      {/* ===== Hero Section ===== */}
      <section className="her-content">
        <div className="her-text">
          <p>{t("partner_hero_para")}</p>
        </div>
      </section>

      {/* ===== Who We Work With ===== */}
      <h2 className="secion-title">{t("partner_who_heading")}</h2>
      <div className="timeline">
        
        {/* Farmer Collectives */}
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>{t("partner_who_1_title")}</h3>
            <p>{t("partner_who_1_desc")}</p>
            <button
              className="cta-button"
              onClick={() => navigate("/OnboardingForm")}
            >
              {t("partner_button_onboard")}
            </button>
          </div>
          <div className="timeline-image">
            <img src={fpo} alt={t("partner_image_alt_fpo")} className="partner-image" />
          </div>
        </div>

        {/* Financial Institutions */}
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>{t("partner_who_2_title")}</h3>
            <p>{t("partner_who_2_desc")}</p>
            <button
              className="cta-button"
              onClick={() => navigate("/OnboardingForm")}
            >
              {t("partner_button_onboard")}
            </button>
          </div>
          <div className="timeline-image">
            <img src={fin} alt={t("partner_image_alt_finance")} className="partner-image" />
          </div>
        </div>

        {/* AgriTech Innovators */}
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>{t("partner_who_3_title")}</h3>
            <p>{t("partner_who_3_desc")}</p>
            <button
              className="cta-button"
              onClick={() => navigate("/OnboardingForm")}
            >
              {t("partner_button_onboard")}
            </button>
          </div>
          <div className="timeline-image">
            <img src={Ag} alt={t("partner_image_alt_agritech")} className="partner-image" />
          </div>
        </div>
      </div>
      
      {/* ===== Collaborative Network ===== */}
      <section className="partners-logos">
        <h2 className="partners-title">{t("partner_network_heading")}</h2>
        <p className="partners-subtitle">{t("partner_network_subtitle")}</p>
        {/* Logo slider logic remains the same */}
        <div className="partners-slider">
          <div className="partners-track">
            {logos.map((logo, idx) => (
              <a
                key={idx}
                href={partnerLinks[idx]}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-logo"
                aria-label={`Partner link ${idx + 1}`}
              >
                <img src={logo} alt={`logo-${idx}`} />
              </a>
            ))}
            {/* duplicate for infinite scroll */}
            {logos.map((logo, idx) => (
              <a
                key={`dup-${idx}`}
                href={partnerLinks[idx]}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-logo"
                aria-label={`Partner link duplicate ${idx + 1}`}
              >
                <img src={logo} alt={`logo-dup-${idx}`} />
              </a>
            ))}
          </div>
        </div>
      </section>
      <WhatsAppChatWidget />
      <Climate/>
      {/* ===== Why Partner ===== */}
      <section className="policy-box">
        <div className="policy-content">
          <h2>{t("partner_why_heading")}</h2>
          <ul className="policy-list">
            <li><strong>{t("partner_why_li_1").split(":")[0]}:</strong>{t("partner_why_li_1").split(":")[1]}</li>
            <li><strong>{t("partner_why_li_2").split(":")[0]}:</strong>{t("partner_why_li_2").split(":")[1]}</li>
            <li><strong>{t("partner_why_li_3").split(":")[0]}:</strong>{t("partner_why_li_3").split(":")[1]}</li>
            <li><strong>{t("partner_why_li_4").split(":")[0]}:</strong>{t("partner_why_li_4").split(":")[1]}</li>
            <li><strong>{t("partner_why_li_5").split(":")[0]}:</strong>{t("partner_why_li_5").split(":")[1]}</li>
          </ul>
        </div>
      </section>

      {/* ===== Business Enquiries ===== */}
      <section className="sec">
        <h2>{t("partner_enquiries_heading")}</h2>
        <p>{t("partner_enquiries_p1")}</p>
        <ul>
          <li>{t("partner_enquiries_li_1")}</li>
          <li>{t("partner_enquiries_li_2")}</li>
          <li>{t("partner_enquiries_li_3")}</li>
          <li>{t("partner_enquiries_li_4")}</li>
        </ul>
        <p>
          {t("partner_enquiries_p2").split(":")[0]}
          <a href="mailto:partnerships@agrifabrix.com"> partnerships@agrifabrix.com</a>
        </p>
      </section>

      {/* ===== Government & Policy ===== */}
      <section className="policy-box">
        <div className="policy-content">
          <h2>{t("partner_gov_heading")}</h2>
          <ul className="policy-list">
            <li><strong>{t("partner_gov_li_1").split(":")[0]}:</strong>{t("partner_gov_li_1").split(":")[1]}</li>
            <li><strong>{t("partner_gov_li_2").split(":")[0]}:</strong>{t("partner_gov_li_2").split(":")[1]}</li>
            <li><strong>{t("partner_gov_li_3").split(":")[0]}:</strong>{t("partner_gov_li_3").split(":")[1]}</li>
            <li><strong>{t("partner_gov_li_4").split(":")[0]}:</strong>{t("partner_gov_li_4").split(":")[1]}</li>
            <li><strong>{t("partner_gov_li_5").split(":")[0]}:</strong>{t("partner_gov_li_5").split(":")[1]}</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Partners;