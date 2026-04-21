import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { theme } = useTheme();
  const { t, ready } = useTranslation("header"); // 'ready' tells us if translations loaded

  const words = t("words", { returnObjects: true }) || [];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  // Use hardcoded text for the very first frame to satisfy LCP
  if (!ready) {
    return (
      <div className={`hero-container ${theme} lcp-loading`}>
        <h1 className="hero-title">
          The best tools for your work
        </h1>
        <p className="hero-subtitle">Handpicked resources to boost your productivity.</p>
      </div>
    );
  }

  const currentWord = words[index] || { text: "Tools", color: "#6366f1" };

  return (
    <div className={`hero-container ${theme}`}>
      <h1 className="hero-title">
        {t("titleStart")}{" "}
        <span
          key={currentWord.text}
          className={`highlight ${index === 0 ? "lcp-priority" : ""}`}
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