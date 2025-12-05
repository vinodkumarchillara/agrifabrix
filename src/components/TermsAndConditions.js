import React from 'react';
import '../styles/TermsAndConditions.css';
import { useLang } from "../components/LangContext"; // 👈 Import the custom hook
import WhatsAppChatWidget from "./WhatsAppChatWidget"; // Import the WhatsApp widget
import Climate from "./Climate"

const TermsAndConditions = () => {
  const { t } = useLang(); // 👈 Access the global translation function

  return (
    <div className="terms-container">
      <h1 className="terms-heading">
        {t("policy_terms_main_heading")}
      </h1>

      <p className="terms-paragraph">
        {t("policy_terms_intro")}
      </p>

      {/* 1. Use of the Site */}
      <h2 className="terms-subheading">
        {t("policy_terms_heading_1")}
      </h2>
      <p className="terms-paragraph">
        {t("policy_terms_p1")}
      </p>

      {/* 2. Intellectual Property */}
      <h2 className="terms-subheading">
        {t("policy_terms_heading_2")}
      </h2>
      <p className="terms-paragraph">
        {t("policy_terms_p2")}
      </p>

      {/* 3. User Responsibilities */}
      <h2 className="terms-subheading">
        {t("policy_terms_heading_3")}
      </h2>
      <ul className="terms-list">
        <li>{t("policy_terms_li_3_1")}</li>
        <li>{t("policy_terms_li_3_2")}</li>
        <li>{t("policy_terms_li_3_3")}</li>
      </ul>
       <WhatsAppChatWidget />
       <Climate/>
      {/* 4. Limitation of Liability */}
      <h2 className="terms-subheading">
        {t("policy_terms_heading_4")}
      </h2>
      <p className="terms-paragraph">
        {t("policy_terms_p4")}
      </p>

      {/* 5. Changes to Terms */}
      <h2 className="terms-subheading">
        {t("policy_terms_heading_5")}
      </h2>
      <p className="terms-paragraph">
        {t("policy_terms_p5")}
      </p>
    </div>
  );
};

export default TermsAndConditions;