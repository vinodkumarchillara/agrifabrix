import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../images/l.png";
import { useLang } from "../components/LangContext";
import { FaGlobe } from "react-icons/fa";

const Navbar = () => {
  const { currentLang, setCurrentLang, t, availableLangs } = useLang();

  const [isScrolling, setIsScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const languageOptions = Object.entries(availableLangs).filter(
    ([code]) => code !== "placeholder"
  );

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const handleParentClick = (dropdownName, path) => {
    navigate(path);
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleLangChange = (event) => {
    if (event.target.value !== "placeholder") {
      setCurrentLang(event.target.value);
    }
    setMenuOpen(false);
  };

  const currentLangName = availableLangs[currentLang];

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 250);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolling ? "fade" : ""}`}>
      <div className="logo-container">
        <Link to="/">
          <img
            src={logo}
            alt={t("nav_agrifabrix_logo")}
            className="logo-image"
          />
        </Link>
      </div>

      <div className="mobile-menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>{t("nav_home")}</Link>
          </li>

          <li>
            <Link to="/about" onClick={toggleMenu}>{t("nav_about")}</Link>
          </li>

          {/* SOLUTIONS DROPDOWN (kept same) */}
          <li className={`dropdown ${openDropdown === "solutions" ? "open" : ""}`}>
            <div
              className="dropbtn"
              onClick={() => {
                if (window.innerWidth <= 768) {
                   toggleDropdown("solutions");
                } else {
                  navigate("/Solutions");      // ✅ go to Solutions page on desktop
                  setMenuOpen(false);
                  setOpenDropdown(null);
                }
              }}
            >
              {t("nav_solutions")}
              <span
                className="arrow-css"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown("solutions");
                }}
              ></span>
            </div>

            <div
              className={`dropdown-content ${
                openDropdown === "solutions" ? "open" : ""
              }`}
            >
              <Link to="/InputFabriX" onClick={toggleMenu}>{t("nav_input_fabrix")}</Link>
              <Link to="/CreditFabriX" onClick={toggleMenu}>{t("nav_credit_fabrix")}</Link>
              <Link to="/TraceFabriX" onClick={toggleMenu}>{t("nav_trace_fabrix")}</Link>
              <Link to="/SupplyFabriX" onClick={toggleMenu}>{t("nav_supply_fabrix")}</Link>
              <Link to="/TradeFabriX" onClick={toggleMenu}>{t("nav_trade_fabrix")}</Link>
              <Link to="/Solutions" onClick={toggleMenu}>{t("nav_solutions")}</Link>
            </div>
          </li>

          {/* PARTNERS — NORMAL LINK (NO DROPDOWN) */}
          <li className="nav-item">
            <Link to="/Partners" onClick={toggleMenu}>
              {t("nav_partners")}
            </Link>
          </li>

          {/* SINGLE LINKS */}
          <li>
            <Link to="/Technology" onClick={toggleMenu}>{t("nav_technology")}</Link>
          </li>

          <li>
            <Link to="/Sustainability" onClick={toggleMenu}>{t("nav_sustainability")}</Link>
          </li>

          <li>
            <a
              href="https://store.agrifabrix.in/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              {t("nav_marketplace")}
            </a>
          </li>
          <li>
  <Link
    to="/#contact-form"
    onClick={() => {
      toggleMenu();
      setTimeout(() => {
        const el = document.getElementById("contact-form");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }}
  >
    {t("nav_contact_us")}
  </Link>
</li>


        </ul>

        {/* LANGUAGE SELECT */}
        <div className="lang-select-container">
          <div className="lang-display-wrapper">
            <FaGlobe className="lang-icon" />
            <span className="lang-text">{currentLangName}</span>
          </div>

          <select
            className="lang-value"
            onChange={handleLangChange}
            value={currentLang}
            aria-label={t("lang_select")}
          >
            <option value="placeholder" disabled hidden>
              {availableLangs["placeholder"]}
            </option>

            {languageOptions.map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
