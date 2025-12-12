import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { GiFarmer, GiTrade } from "react-icons/gi";
import {
  FaHandsHelping,
  FaSolarPanel,
  FaChalkboardTeacher,
} from "react-icons/fa";

import "../styles/Solutions.css";
import BackgroundImage from "../images/Solutions.jpg";
import solutionsVideo from "../images/solutionsVideo.mp4"

import { useLang } from "../components/LangContext";
import WhatsAppChatWidget from "./WhatsAppChatWidget";
import Climate from "./Climate";

import InputFabriX from "../images/InputFabrix.jpg";
import CreditFabriX from "../images/creditfabrix.jpg";
import TradeFabriX from "../images/TradeFabriX.jpg";
import SupplyFabriX from "../images/SupplyFabriX.jpg";
import TraceFabriX from "../images/TraceFabriX.jpg";

const Solutions = () => {
  const { t } = useLang();
  const cardsRef = useRef(null);

  const handleLearnMore = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="sol-section" id="solutions">

      {/* ================= HERO SECTION ================= */}
      <div className="sol-hero-banner">
        <video
          src={solutionsVideo}
          className="sol-hero-image"
          autoPlay 
          loop 
          muted 
          playsInline
        />

        <div className="sol-hero-overlay"></div>

        <div className="sol-hero-text">
          <h2>{t("solutions_hero_title")}</h2>
          <p>{t("solutions_hero_desc")}</p>

          <button className="sol-hero-btn" onClick={handleLearnMore}>
            {t("solutions_button_learn_more")}
          </button>
        </div>
      </div>

      <WhatsAppChatWidget />
      <Climate />

      {/* ================= CHALLENGES ================= */}
      <div className="sol-challenges-container">
        <h3 className="sol-challenges-title">{t("solutions_challenges_heading")}</h3>

        <div className="sol-challenge-grid">

          <div className="sol-challenge-card">
            <GiFarmer className="sol-challenge-icon" />
            <h4>{t("solutions_challenge_1_title")}</h4>
            <p>{t("solutions_challenge_1_desc")}</p>
          </div>

          <div className="sol-challenge-card">
            <GiTrade className="sol-challenge-icon" />
            <h4>{t("solutions_challenge_2_title")}</h4>
            <p>{t("solutions_challenge_2_desc")}</p>
          </div>

          <div className="sol-challenge-card">
            <FaHandsHelping className="sol-challenge-icon" />
            <h4>{t("solutions_challenge_3_title")}</h4>
            <p>{t("solutions_challenge_3_desc")}</p>
          </div>

          <div className="sol-challenge-card">
            <FaSolarPanel className="sol-challenge-icon" />
            <h4>{t("solutions_challenge_4_title")}</h4>
            <p>{t("solutions_challenge_4_desc")}</p>
          </div>

          <div className="sol-challenge-card">
            <FaChalkboardTeacher className="sol-challenge-icon" />
            <h4>{t("solutions_challenge_5_title")}</h4>
            <p>{t("solutions_challenge_5_desc")}</p>
          </div>

        </div>
      </div>

      {/* ================= SOLUTION CARDS ================= */}
      <div className="sol-uneven-grid" ref={cardsRef}>

        {/* INPUT FABRIX */}
        <div className="sol-ug-card sol-big-wide">
          <img src={InputFabriX} alt="InputFabriX" />
          <div className="sol-ug-text">
            <h4>InputFabriX</h4>
            <p>{t("sol_input_desc")}</p>

            <Link to="/InputFabriX">
              <button className="sol-ug-btn">Browse Inputs</button>
            </Link>
          </div>
        </div>

        {/* CREDIT FABRIX */}
        <div className="sol-ug-card sol-big-tall">
          <img src={CreditFabriX} alt="CreditFabriX" />
          <div className="sol-ug-text">
            <h4>CreditFabriX</h4>
            <p>{t("sol_credit_desc")}</p>

            <Link to="/CreditFabriX">
              <button className="sol-ug-btn">Apply Finance</button>
            </Link>
          </div>
        </div>

        {/* TRACE FABRIX */}
        <div className="sol-ug-card sol-medium-wide">
          <img src={TraceFabriX} alt="TraceFabriX" />
          <div className="sol-ug-text">
            <h4>TraceFabriX</h4>
            <p>{t("sol_trace_desc")}</p>

            <Link to="/TraceFabriX">
              <button className="sol-ug-btn">Discover TraceFabriX</button>
            </Link>
          </div>
        </div>

        {/* SUPPLY FABRIX */}
        <div className="sol-ug-card sol-small-card">
          <img src={SupplyFabriX} alt="SupplyFabriX" />
          <div className="sol-ug-text">
            <h4>SupplyFabriX</h4>
            <p>{t("sol_supply_desc")}</p>

            <Link to="/SupplyFabriX">
              <button className="sol-ug-btn">Optimize Supply Chain</button>
            </Link>
          </div>
        </div>

        {/* TRADE FABRIX */}
        <div className="sol-ug-card sol-medium-tall">
          <img src={TradeFabriX} alt="TradeFabriX" />
          <div className="sol-ug-text">
            <h4>TradeFabriX</h4>
            <p>{t("sol_trade_desc")}</p>

            <Link to="/TradeFabriX">
              <button className="sol-ug-btn">Explore TradeFabriX</button>
            </Link>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Solutions;
