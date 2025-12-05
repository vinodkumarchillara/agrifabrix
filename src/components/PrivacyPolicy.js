

import React from 'react';
import '../styles/PrivacyPolicy.css';
import { useLang } from "../components/LangContext"; // 👈 Import the custom hook
import WhatsAppChatWidget from "./WhatsAppChatWidget"; // Import the WhatsApp widget
import Climate from "./Climate"

const PrivacyPolicy = () => {
  const { t } = useLang(); // 👈 Access the global translation function

  // Helper function to handle text containing the mailto link
  const renderLinkText = (key, email) => {
    const text = t(key);
    const parts = text.split(email);
    return (
      <>
        {parts[0]}
        <a href={`mailto:${email}`}>{email}</a>
        {parts[1]}
      </>
    );
  };
  
  return (
    <div className="privacy-container">
      <WhatsAppChatWidget />
      <Climate/>
      <h1 className="privacy-heading">
        {t("policy_privacy_main_heading")}
      </h1>

      <p className="privacy-paragraph">
        {t("policy_privacy_intro")}
      </p>

      {/* 1. Information We Collect */}
      <h2 className="privacy-subheading">
        {t("policy_privacy_heading_1")}
      </h2>
      <p className="privacy-paragraph">
        {t("policy_privacy_p1")}
      </p>
      <ul className="privacy-list">
        <li>{t("policy_privacy_li_1_1")}</li>
        <li>{t("policy_privacy_li_1_2")}</li>
        <li>{t("policy_privacy_li_1_3")}</li>
        <li>{t("policy_privacy_li_1_4")}</li>
      </ul>

      {/* 2. How We Use Your Information */}
      <h2 className="privacy-subheading">
        {t("policy_privacy_heading_2")}
      </h2>
      <p className="privacy-paragraph">
        {t("policy_privacy_p2")}
      </p>
      <ul className="privacy-list">
        <li>{t("policy_privacy_li_2_1")}</li>
        <li>{t("policy_privacy_li_2_2")}</li>
        <li>{t("policy_privacy_li_2_3")}</li>
        <li>{t("policy_privacy_li_2_4")}</li>
        <li>{t("policy_privacy_li_2_5")}</li>
      </ul>

      {/* 3. Cookies and Tracking Technologies */}
      <h2 className="privacy-subheading">
        {t("policy_privacy_heading_3")}
      </h2>
      <p className="privacy-paragraph">
        {t("policy_privacy_p3")}
      </p>

      {/* 4. Information Sharing and Disclosure */}
      <h2 className="privacy-subheading">
        {t("policy_privacy_heading_4")}
      </h2>
      <p className="privacy-paragraph">
        {t("policy_privacy_p4")}
      </p>

      {/* 5. Data Security */}
      <h2 className="privacy-subheading">
        {t("policy_privacy_heading_5")}
      </h2>
      <p className="privacy-paragraph">
        {t("policy_privacy_p5")}
      </p>

      {/* 6. Your Rights */}
      <h2 className="privacy-subheading">
        {t("policy_privacy_heading_6")}
      </h2>
      <p className="privacy-paragraph">
        {/* Use helper function to maintain mailto link */}
        {renderLinkText("policy_privacy_p6", "privacy@agrifabrix.com")}
      </p>

      {/* 7. Changes to This Policy */}
      <h2 className="privacy-subheading">
        {t("policy_privacy_heading_7")}
      </h2>
      <p className="privacy-paragraph">
        {t("policy_privacy_p7")}
      </p>

      {/* 8. Contact Us */}
      <h2 className="privacy-subheading">
        {t("policy_privacy_heading_8")}
      </h2>
      <p className="privacy-paragraph">
        {/* Use helper function to maintain mailto link */}
        {renderLinkText("policy_privacy_p8", "privacy@agrifabrix.com")}
      </p>
    </div>
  );
};

export default PrivacyPolicy;