

import React from "react";
import "../styles/Sustainable.css";
import sustainableBg from "../images/Susatainable.png";
import { useLang } from "../components/LangContext"; // 👈 Import the custom hook
import WhatsAppChatWidget from "./WhatsAppChatWidget"; // Import the WhatsApp widget
import Climate from "./Climate"

const Sustainability = () => {
  const { t } = useLang(); // 👈 Access the global translation function

  return (
    <div className="sustainability">
      {/* Hero Section */}
      <div className="Sustain-section">
        <div className="Sustain-row">
          <img 
            src={sustainableBg} 
            alt={t("sustain_hero_alt")} 
            className="Sustain-bg" 
          />
          <div className="Sustain-content">
            <h2>{t("sustain_hero_title")}</h2>
            <p>{t("sustain_hero_desc")}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="sustainability-section">
        <div className="sustainability-container">

          {/* Intro Paragraphs */}
          <p className="intro">
            {t("sustain_intro_p1")}
          </p>
          <p className="intro">
            {t("sustain_intro_p2")}
          </p>

          <hr />

          {/* Commitment Section */}
          <h2>{t("sustain_commitment_heading")}</h2>
          <p>
            {t("sustain_commitment_p")}
          </p>

          <hr />

          {/* ESG Columns */}
          <h2>{t("sustain_esg_heading")}</h2>
          <div className="esg-columns">
            <div className="esg-box">
              <h3>{t("sustain_esg_e_title")}</h3>
              <ul>
                <li>{t("sustain_esg_e_li_1")}</li>
                <li>{t("sustain_esg_e_li_2")}</li>
                <li>{t("sustain_esg_e_li_3")}</li>
              </ul>
            </div>
            <div className="esg-box">
              <h3>{t("sustain_esg_s_title")}</h3>
              <ul>
                <li>{t("sustain_esg_s_li_1")}</li>
                <li>{t("sustain_esg_s_li_2")}</li>
                <li>{t("sustain_esg_s_li_3")}</li>
              </ul>
            </div>
            <div className="esg-box">
              <h3>{t("sustain_esg_g_title")}</h3>
              <ul>
                <li>{t("sustain_esg_g_li_1")}</li>
                <li>{t("sustain_esg_g_li_2")}</li>
                <li>{t("sustain_esg_g_li_3")}</li>
              </ul>
            </div>
          </div>

          <hr />
           <WhatsAppChatWidget />
           <Climate/>
          {/* Game Changer Section */}
          <h2>{t("sustain_game_changer_heading")}</h2>
          <ul className="game-changer-list">
            <li>{t("sustain_changer_li_1")}</li>
            <li>{t("sustain_changer_li_2")}</li>
            <li>{t("sustain_changer_li_3")}</li>
            <li>{t("sustain_changer_li_4")}</li>
          </ul>

          <p className="closing">
            {t("sustain_closing_p")}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;