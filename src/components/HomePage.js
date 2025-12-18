import React, { useState, useEffect,useRef  } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import capital from "../images/thub.jpg";

import {
  FaSeedling,
  FaShoppingCart,
  FaHandshake,
  FaTruck,
} from "react-icons/fa";

import "../styles/HomePage.css";

import cropimage from "../images/HomeSol.png";
import mission from "../images/Vision.png";
import cropimage2 from "../images/HomeTech.png";

import inputs from "../images/inputs.png";
import orders from "../images/orders.png";
import consultancy from "../images/consultancy.png";
import supplychain from "../images/supplychain.png";

import { useLang } from "../components/LangContext";
import WhatsAppChatWidget from "./WhatsAppChatWidget";
import Climate from "./Climate";
import { FaXTwitter, FaFacebookF, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa6";

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


const HomePage = () => {
  const { t } = useLang();


  const [showPopupForm, setShowPopupForm] = useState(false);

// Show form after 3 minutes
useEffect(() => {
  const timer = setTimeout(() => {
    setShowPopupForm(true);
  }, 120000); // 3 minutes = 180 seconds = 180,000 ms

  return () => clearTimeout(timer);
}, []);


  const [currentSlide, setCurrentSlide] = useState(1);
  const [zoomOut, setZoomOut] = useState(false);


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
      const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
        const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
      const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://admin.agrifabrix.in/api/static/Contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        // Use translated success alert
        alert(t("contact_alert_success")); 
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        // Use translated failure alert
        alert(data.error || t("contact_alert_failed")); 
        console.error("Server Error:", data);
      }
    } catch (err) {
      // Use translated error alert
      alert(t("contact_alert_error")); 
      console.error("Fetch Error:", err);
    }
  };

useEffect(() => {
  let lastY = window.scrollY;

  const handleScroll = () => {
    const current = window.scrollY;

    if (current > lastY) {
      setZoomOut(true);   // scroll down → zoom OUT
    } else {
      setZoomOut(false);  // scroll up → zoom IN
    }

    lastY = current;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);




  const slides = [
    {
      title: t("home_slide_1_title"),
      description: t("home_slide_1_desc"),
      image: cropimage,
      link: "/Solutions",
    },
    {
      title: t("home_slide_2_title"),
      description: t("home_slide_2_desc"),
      image: cropimage2,
      link: "/Technology",
    },
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  // ⭐ AUTO SLIDE EVERY 5 SECONDS ⭐
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);


// ⭐ SCROLL ANIMATION TRIGGER ⭐
useEffect(() => {
  const elements = document.querySelectorAll(
    ".fade-in-up, .fade-in-left, .fade-in-right"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
}, []);


  return (
    <div className="homepage">

      {/* ================= HERO CAROUSEL ================= */}
<section className="hero-carousel" id="home">

  {/* Slide */}
  <div className="hero-slide" key={currentSlide}>

    {/* Fullscreen image */}
    <img
      src={slides[currentSlide].image}
      alt={t("home_image_alt_crop")}
      className="hero-carousel-image"
    />

    {/* REMOVED overlay */}

    {/* Text on image with shadow */}
   <div
  className={`hero-text-overlay no-overlay-text 
    ${currentSlide === 0 ? "first-slide-spacing" : ""}
    ${currentSlide === 1 ? "text-right-slide black-text" : ""}
  `}
>
  <h1>{slides[currentSlide].title}</h1>
  <p>{slides[currentSlide].description}</p>

  <a href={slides[currentSlide].link} className="learn-more">
    {t("home_button_learn_more")}
  </a>
</div>



  </div>

</section>



<section class="highlights">
  
  <div class="highlight ai">
    <div class="highlight-text">
      <h1>AI-Powered Insights</h1>
      <p>Optimizing supply chain with <br></br>real-time data.</p>
    </div>
  </div>

  <div class="highlight finance">
    <div class="highlight-text1">
      <h1>Financial Access</h1>
      <p>BNPL, invoice financing, <br></br>and agrifabrix loans.</p>
    </div>
  </div>

  <div class="highlight blockchain">
    <div class="highlight-text">
      <h1>Blockchain Traceability</h1>
      <p>Ensuring transparency and <br></br>fraud prevention.</p>
    </div>
  </div>

</section>


<div className="section-border top-border"></div>

<section className="vision-mission new-layout paint-section">

  <div className="vision-section">   {/* ⭐ Missing wrapper added */}

    <div className="vision-image-box">
      <img 
        src={mission} 
        alt={t("home_image_alt_mission")} 
        className={zoomOut ? "zoom-out" : ""} 
      />
    </div>

    <div className="vision-text-box">
      <h2>{t("home_vision_heading")}</h2>
      <p>{t("home_vision_text")}</p>

      <h2>{t("home_mission_heading")}</h2>
      <p>{t("home_mission_text")}</p>
    </div>

  </div>
  
</section>
<div className="section-border bottom-border"></div>



      {/* WhatsApp + Climate */}
      <WhatsAppChatWidget />
      <Climate />




      {/* ================= SERVICES ================= */}
      <section className="services" id="solutions">
        {/* <h2>{t("home_offerings_heading")}</h2> */}

        <div className="solutions-layout">
<div className="service-grid">

  <div className="service-card">
    <img src={inputs} alt="Inputs" className="service-img" />

    <div className="service-text-block">
      <h3>
        <FaSeedling className="service-icon" /> {t("home_offering_inputs_title")}
      </h3>
      <p>{t("home_offering_inputs_desc")}</p>
    </div>
  </div>

  <div className="service-card">
    <img src={orders} alt="Orders" className="service-img" />

    <div className="service-text-block">
      <h3>
        <FaShoppingCart className="service-icon" /> {t("home_offering_ordering_title")}
      </h3>
      <p>{t("home_offering_ordering_desc")}</p>
    </div>
  </div>

  <div className="service-card">
    <img src={consultancy} alt="Consultancy" className="service-img" />

    <div className="service-text-block">
      <h3>
        <FaHandshake className="service-icon" /> {t("home_offering_consultancy_title")}
      </h3>
      <p>{t("home_offering_consultancy_desc")}</p>
    </div>
  </div>

  <div className="service-card">
    <img src={supplychain} alt="Supply Chain" className="service-img" />

    <div className="service-text-block">
      <h3>
        <FaTruck className="service-icon" /> {t("home_offering_supply_title")}
      </h3>
      <p>{t("home_offering_supply_desc")}</p>
    </div>
  </div>

</div>







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

<section className="contact-section-two-column">
  
  {/* LEFT GREEN CUBOID */}
  <div className="contact-cuboid">
    <h2>Your Growth is Our Priority – Let’s Build the Future of Agriculture Together</h2>

    <h3>Contact Us</h3>

    <p><strong>Email:</strong> support@agrifabrix.com</p>
    <p><strong>Phone:</strong> +91-7075483505</p>

    <p className="timing">
      Our support team is available Monday to Saturday<br />
      from 9:00 AM to 6:00 PM IST.
    </p>
  </div>

  {/* RIGHT WHITE FORM */}
  <div className="contact-form-box" id="contact-form">
    <h2>{t("contact_form_heading")}</h2>

    <form onSubmit={handleSubmit}>

      <label>{t("contact_label_name")}</label>
      <input
        type="text"
        name="name"
        placeholder={t("contact_placeholder_name")}
        required
        value={formData.name}
        onChange={handleChange}
      />

      <label>{t("contact_label_email")}</label>
      <input
        type="email"
        name="email"
        placeholder={t("contact_placeholder_email")}
        required
        value={formData.email}
        onChange={handleChange}
      />

      <label>{t("contact_label_phone")}</label>
      <input
        type="tel"
        name="phone"
        placeholder={t("contact_placeholder_phone")}
        required
        value={formData.phone}
        onChange={handleChange}
      />

      <label>{t("contact_label_message")}</label>
      <textarea
        name="message"
        placeholder={t("contact_placeholder_message")}
        required
        value={formData.message}
        onChange={handleChange}
      ></textarea>

      <button type="submit">{t("contact_button_submit")}</button>
    </form>
  </div>

</section>


        </div>
      </section>
<section
  className="contact-details-container"
  onClick={() =>
    window.open(
      "https://maps.app.goo.gl/LiDKvisvT1f4pvwy8"
    )
  }
>

  <div className="contact-bg-overlay">
    <h2 className="contact-heading">{t("contact_details_heading")}</h2>

    <p className="contact-address">
      T-Hub, Phase 2, Plot No 1/C, Sy No 83/1, Raidurgam, Knowledge City Rd,
      Panmaktha, Serilingampalle, Hyderabad, Telangana 500081.
    </p>

  </div>

</section>

{showPopupForm && (
  <div className="popup-overlay">
    <div className="popup-form-container">
      <button className="popup-close" onClick={() => setShowPopupForm(false)}>×</button>

      <h2>{t("contact_form_heading")}</h2>

      <form onSubmit={handleSubmit}>

        <label>{t("contact_label_name")}</label>
        <input
          type="text"
          name="name"
          placeholder={t("contact_placeholder_name")}
          required
          value={formData.name}
          onChange={handleChange}
        />

        <label>{t("contact_label_email")}</label>
        <input
          type="email"
          name="email"
          placeholder={t("contact_placeholder_email")}
          required
          value={formData.email}
          onChange={handleChange}
        />

        <label>{t("contact_label_phone")}</label>
        <input
          type="tel"
          name="phone"
          placeholder={t("contact_placeholder_phone")}
          required
          value={formData.phone}
          onChange={handleChange}
        />

        <label>{t("contact_label_message")}</label>
        <textarea
          name="message"
          placeholder={t("contact_placeholder_message")}
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">{t("contact_button_submit")}</button>
      </form>
    </div>
  </div>
)}


    </div>
  );
};

export default HomePage;
