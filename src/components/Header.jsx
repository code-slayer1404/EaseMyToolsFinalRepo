import React, { useState, useEffect, useRef } from "react";
import "../styles/Header.css";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { theme } = useTheme();
  const { t } = useTranslation("header");

  // Get words and provide a fallback to prevent "undefined" crashes
  const words = t("words", { returnObjects: true }) || [{ text: "Tools", color: "#6366f1" }];
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // We use a recursive setTimeout instead of setInterval. 
    // This is much safer for tab switching and prevents "stacking" updates.
    const rotateWord = () => {
      setIndex((prev) => (prev + 1) % words.length);
      timeoutRef.current = setTimeout(rotateWord, 2000);
    };

    timeoutRef.current = setTimeout(rotateWord, 2000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [words.length]); // Only re-run if the number of words changes

  // Safety check: if words[index] is missing for a split second, don't crash the render
  if (!words[index]) return null;

  return (
    <header className={`hero-container ${theme}`}>
      <h1 className="hero-title">
        {t("titleStart")}{" "}
        <span
          key={index}
          className="highlight"
          style={{ backgroundColor: words[index].color || "#6366f1" }}
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