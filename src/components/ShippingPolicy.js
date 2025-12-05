
import React from 'react';
import '../styles/ShippingPolicy.css';
import { useLang } from "../components/LangContext"; // 👈 Import the custom hook
import WhatsAppChatWidget from "./WhatsAppChatWidget"; // Import the WhatsApp widget
import Climate from "./Climate"

const ShippingPolicy = () => {
  const { t } = useLang(); // 👈 Access the global translation function
  
  return (
    <div className="shipping-policy-container">
      <h1 className="policy-title">
        {t("policy_shipping_main_heading")}
      </h1>

      {/* Processing Time */}
      <section className="policy-section">
        <h2 className="section-heading">
          {t("policy_shipping_heading_1")}
        </h2>
        <p>
          {t("policy_shipping_p1")}
        </p>
      </section>
       <WhatsAppChatWidget />
       <Climate/>
      {/* Shipping Rates and Estimates */}
      <section className="policy-section">
        <h2 className="section-heading">
          {t("policy_shipping_heading_2")}
        </h2>
        <p>
          {t("policy_shipping_p2")}
        </p>
        <ul>
          <li>
            <strong>{t("policy_shipping_li_1").split(":")[0]}:</strong> 
            {t("policy_shipping_li_1").split(":")[1]}
          </li>
          <li>
            <strong>{t("policy_shipping_li_2").split(":")[0]}:</strong> 
            {t("policy_shipping_li_2").split(":")[1]}
          </li>
        </ul>
      </section>

      {/* How Do I Check the Status of My Order? */}
      <section className="policy-section">
        <h2 className="section-heading">
          {t("policy_shipping_heading_3")}
        </h2>
        <p>
          {t("policy_shipping_p3_1")}
        </p>
        <p>
          {t("policy_shipping_p3_2")}
        </p>
      </section>

      {/* Shipping to P.O. Boxes */}
      <section className="policy-section">
        <h2 className="section-heading">
          {t("policy_shipping_heading_4")}
        </h2>
        <p>
          {t("policy_shipping_p4")}
        </p>
      </section>

      {/* Refunds, Returns, and Exchanges */}
      <section className="policy-section">
        <h2 className="section-heading">
          {t("policy_shipping_heading_5")}
        </h2>
        <p>
          {t("policy_shipping_p5")}
        </p>
      </section>
    </div>
  );
};

export default ShippingPolicy;