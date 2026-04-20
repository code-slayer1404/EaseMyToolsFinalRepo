import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { theme } = useTheme();
  const { t } = useTranslation("header");

  const words = t("words", { returnObjects: true }); 
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words]);

  return (
    <header className={`hero-container ${theme}`}>
      <h1 className="hero-title">
        {t("titleStart")}{" "}
        <span
          key={index}
          className="highlight"
          style={{ backgroundColor: words[index].color }}
        >
          {words[index].text}
        </span>{" "}
        {t("titleEnd")}
      </h1>
      <p className="hero-subtitle">{t("subtitle")}</p>
    </header>
  );
};

export default Header;