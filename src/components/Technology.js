

import React from 'react';
import '../styles/Technology.css';
import { FaRobot, FaDatabase, FaGlobe, FaLeaf, FaLock, FaChartLine } from 'react-icons/fa';
import TechnologyVideo from '../images/TechnologyVideo.mp4';
import { useLang } from "../components/LangContext"; // 👈 Import the custom hook
import WhatsAppChatWidget from "./WhatsAppChatWidget"; // Import the WhatsApp widget
import Climate from "./Climate"

const Technology = () => {
    const { t } = useLang(); // 👈 Access the global translation function
    
    return (
        <div className="technology">
            {/* Hero Section */}
            <div className="Tech-section">
                <div className="Tech-row">
                    <video 
                        src={TechnologyVideo} 
                        className="Tech-bg" 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                    />

                    <div className="Tech-content">
                        <h2>{t("tech_hero_title")}</h2>
                        <p>{t("tech_hero_desc")}</p>
                    </div>
                </div>

            </div>

            {/* AI & ML Section */}
            <div className="tech-section">
                <h2>{t("tech_ai_heading")}</h2>
                <p>{t("tech_ai_desc")}</p>
                <div className="grid">
                    <div className="card">
                        <FaRobot className="tech-icon" />
                        <h4>{t("tech_ai_card_1_title")}</h4>
                        <p>{t("tech_ai_card_1_p")}</p>
                    </div>
                    <div className="card">
                        <FaChartLine className="tech-icon" />
                        <h4>{t("tech_ai_card_2_title")}</h4>
                        <p>{t("tech_ai_card_2_p")}</p>
                    </div>
                    <div className="card">
                        <FaLeaf className="tech-icon" />
                        <h4>{t("tech_ai_card_3_title")}</h4>
                        <p>{t("tech_ai_card_3_p")}</p>
                    </div>
                </div>
            </div>

            {/* Blockchain Section */}
            <div className="tech-section alt-bg">
                <h2>{t("tech_blockchain_heading")}</h2>
                <p>{t("tech_blockchain_desc")}</p>
                <div className="grid">
                    <div className="card">
                        <FaDatabase className="tech-icon" />
                        <h4>{t("tech_bc_card_1_title")}</h4>
                        <p>{t("tech_bc_card_1_p")}</p>
                    </div>
                    <div className="card">
                        <FaLock className="tech-icon" />
                        <h4>{t("tech_bc_card_2_title")}</h4>
                        <p>{t("tech_bc_card_2_p")}</p>
                    </div>
                    <div className="card">
                        <FaGlobe className="tech-icon" />
                        <h4>{t("tech_bc_card_3_title")}</h4>
                        <p>{t("tech_bc_card_3_p")}</p>
                    </div>
                </div>
            </div>
             <WhatsAppChatWidget />
             <Climate/>
            {/* Digital Twin Section */}
            <div className="tech-section">
                <h2>{t("tech_digital_twin_heading")}</h2>
                <p>{t("tech_digital_twin_desc")}</p>
                <div className="grid">
                    <div className="card">
                        <FaGlobe className="tech-icon" />
                        <h4>{t("tech_dt_card_1_title")}</h4>
                        <p>{t("tech_dt_card_1_p")}</p>
                    </div>
                    <div className="card">
                        <FaLeaf className="tech-icon" />
                        <h4>{t("tech_dt_card_2_title")}</h4>
                        <p>{t("tech_dt_card_2_p")}</p>
                    </div>
                    <div className="card">
                        <FaDatabase className="tech-icon" />
                        <h4>{t("tech_dt_card_3_title")}</h4>
                        <p>{t("tech_dt_card_3_p")}</p>
                    </div>
                </div>
            </div>

            {/* Why AgriFabriX? */}
            <div className="why-agri">
                <h2>{t("tech_why_heading")}</h2>
                <div className="benefits">
                    <div className="benefit"><FaChartLine className="tech-icon" /> <p>{t("tech_why_li_1")}</p></div>
                    <div className="benefit"><FaLock className="tech-icon" /> <p>{t("tech_why_li_2")}</p></div>
                    <div className="benefit"><FaGlobe className="tech-icon" /> <p>{t("tech_why_li_3")}</p></div>
                    <div className="benefit"><FaLeaf className="tech-icon" /> <p>{t("tech_why_li_4")}</p></div>
                    <div className="benefit"><FaDatabase className="tech-icon" /> <p>{t("tech_why_li_5")}</p></div>
                </div>
            </div>
        </div>
    );
};

export default Technology;