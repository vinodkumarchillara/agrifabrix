

import React from 'react';
import '../styles/CancellationPolicy.css';
import { useLang } from "../components/LangContext"; // 👈 Import the custom hook
import WhatsAppChatWidget from "./WhatsAppChatWidget"; // Import the WhatsApp widget
import Climate from "./Climate"

const CancellationPolicy = () => {
  const { t } = useLang(); // 👈 Access the global translation function
  
  return (
    <div className="cancellation-container">
      <h1 className="cancellation-heading">
        {t("policy_cancellation_main_heading")}
      </h1>

      <p className="cancellation-paragraph">
        {t("policy_cancellation_intro")}
      </p>

      {/* 1. Cancellation Policy */}
      <h2 className="cancellation-subheading">
        {t("policy_cancellation_heading_1")}
      </h2>
      <ul className="cancellation-list">
        <li>{t("policy_cancellation_li_1")}</li>
        <li>
          {t("policy_cancellation_li_2").split("support@agrifabrix.com")[0]}
          <a href="mailto:support@agrifabrix.com">support@agrifabrix.com</a>
          {t("policy_cancellation_li_2").split("support@agrifabrix.com")[1]}
        </li>
      </ul>
        <WhatsAppChatWidget />
        <Climate/>
      {/* 2. Refund Policy */}
      <h2 className="cancellation-subheading">
        {t("policy_cancellation_heading_2")}
      </h2>
      <ul className="cancellation-list">
        <li>{t("policy_refund_li_1")}</li>
        <li>{t("policy_refund_li_2")}</li>
        <li>{t("policy_refund_li_3")}</li>
        <li>{t("policy_refund_li_4")}</li>
      </ul>

      {/* 3. Non-Refundable Items */}
      <h2 className="cancellation-subheading">
        {t("policy_cancellation_heading_3")}
      </h2>
      <p className="cancellation-paragraph">
        {t("policy_non_refundable_para")}
      </p>
      <ul className="cancellation-list">
        <li>{t("policy_non_refundable_li_1")}</li>
        <li>{t("policy_non_refundable_li_2")}</li>
      </ul>

      {/* 4. Contact Us */}
      <h2 className="cancellation-subheading">
        {t("policy_cancellation_heading_4")}
      </h2>
      <p className="cancellation-paragraph">
        {/* Use the split trick to ensure the email link remains clickable */}
        {t("policy_contact_us_para").split("support@agrifabrix.com")[0]}
        <a href="mailto:support@agrifabrix.com">support@agrifabrix.com</a>
        {t("policy_contact_us_para").split("support@agrifabrix.com")[1]}
      </p>
    </div>
  );
};

export default CancellationPolicy;