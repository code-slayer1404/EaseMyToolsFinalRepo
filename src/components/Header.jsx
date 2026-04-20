import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { theme } = useTheme();
  const { t } = useTranslation("header");

  const words = t("words", { returnObjects: true }) || [];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  // Fallback to avoid "undefined" errors
  const currentWord = words[index] || { text: "Tools", color: "#6366f1" };

  return (
    <div className={`hero-container ${theme}`}>
      <h1 className="hero-title">
        {t("titleStart")}{" "}
        <span
          key={currentWord.text}
          className="highlight"
          style={{ backgroundColor: currentWord.color }}
        >
          {currentWord.text}
        </span>{" "}
        {t("titleEnd")}
      </h1>
      <p className="hero-subtitle">{t("subtitle")}</p>
    </div>
  );
};

export default Header;