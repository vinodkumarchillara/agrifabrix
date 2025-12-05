import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/InputFabriX.css";
import { useLang } from "../components/LangContext";
import WhatsAppChatWidget from "./WhatsAppChatWidget";
import Climate from "./Climate";

/* ===== OFFERING CARD IMAGES ===== */
import seeds from "../images/seeds.png";
import pest from "../images/pest.png";
import fertilizers from "../images/fertilizers.png";
import irrigation from "../images/smart_irrigation.png";
import digital from "../images/digital_adv_services.png";

const InputFabriX = () => {
    const { t } = useLang();

    // Background images for offerings cards
    const cardImages = [seeds, pest, fertilizers, irrigation, digital];

    // Key Offerings
    const offerings = [
        { title: t("input_offering_1_title"), body: t("input_offering_1_body") },
        { title: t("input_offering_2_title"), body: t("input_offering_2_body") },
        { title: t("input_offering_3_title"), body: t("input_offering_3_body") },
        { title: t("input_offering_4_title"), body: t("input_offering_4_body") },
        { title: t("input_offering_5_title"), body: t("input_offering_5_body") },
    ];

    // Benefits (no icons)
    const benefits = [
        { title: t("input_benefit_1_title"), body: t("input_benefit_1_body") },
        { title: t("input_benefit_2_title"), body: t("input_benefit_2_body") },
        { title: t("input_benefit_3_title"), body: t("input_benefit_3_body") },
    ];

    return (
        <section className="inputfabrx-section">

            {/* ================= HERO VIDEO SECTION ================= */}
            <div className="inputfabrx-hero video-hero">

                {/* VIDEO BACKGROUND */}
                <video 
                    className="hero-video"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                >
                    <source src={require("../images/ecommerce_vid.mp4")} type="video/mp4" />
                </video>

                {/* DARK OVERLAY */}
                <div className="hero-overlay"></div>

                {/* TEXT CONTENT */}
                <div className="inputfabrx-content hero-text">
                    <h2><strong>{t("input_hero_title")}</strong></h2>
                    <h3>{t("input_hero_subtitle")}</h3>
                    <p>{t("input_hero_desc")}</p>
                </div>

            </div> 
            {/* ✅ HERO CLOSED HERE */}

            {/* WhatsApp + Climate Widgets */}
            <WhatsAppChatWidget />
            <Climate />

            <div className="inputfabrx-container">

                {/* =================== OFFERINGS =================== */}
                <div className="inputfabrx-section-content leaf-decor">
                    <div className="inputfabrx-label">
                        <h3>{t("input_offerings_heading")}</h3>
                    </div>

                    <div className="inputfabrx-card-grid uneven-grid">
                        {offerings.map((item, idx) => (
                            <div className={`inputfabrx-card card-${idx}`} key={idx}>
                                
                                {/* Background Image */}
                                <div 
                                    className="card-bg"
                                    style={{ backgroundImage: `url(${cardImages[idx]})` }}
                                ></div>

                                {/* Overlay */}
                                <div className="card-overlay"></div>

                                {/* Text */}
                                <div className="card-content">
                                    <div className="inputfabrx-title-item">{item.title}</div>
                                    <div className="inputfabrx-body-item">{item.body}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* =================== BENEFITS =================== */}
                <div className="inputfabrx-section-content leaf-decor">
                    <div className="inputfabrx-label">
                        <h3>{t("input_benefits_heading")}</h3>
                    </div>

                    <div className="benefits-grid">
                        {benefits.map((item, idx) => (
                            <div className="benefit-box" key={idx}>
                                <h3 className="benefit-title">{item.title}</h3>
                                <p className="benefit-body">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA BUTTON */}
                <div className="inputfabrx-button-container">
                    <Link to="/OnboardingForm">
                        <button className="inputfabrx-button">
                            {t("input_button_browse")}
                        </button>
                    </Link>
                </div>

            </div>

        </section>
    );
};

export default InputFabriX;
