import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import "../styles/ToolsPage.css";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import { getToolCategories, getAllTools } from "../data/toolsData";
import Header from "./Header";

const ToolsPage = () => {
    const navigate = useNavigate();
    const { theme } = useTheme();
    const { t } = useTranslation("tools");

    const toolCategories = getToolCategories();
    const allTools = getAllTools();

    // 1. Embla Hook Initialization
    // 'loop: true' handles the infinite scrolling natively
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        skipSnaps: false
    });

    // 2. State for Dot Navigation
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
    }, [emblaApi, onSelect]);

    // 3. Search Logic
    const [searchQuery, setSearchQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const filteredTools = searchQuery.trim()
        ? allTools.filter((t) => t.name.toLowerCase().includes(searchQuery.toLowerCase()))
        : [];

    return (
        <>
            <Header />
            <div className={`tools-page ${theme}`}>
                {/* --- SEARCH SECTION --- */}
                <div className="search-container">
                    <div className="search-bar">
                        <input
                            placeholder={t("searchPlaceholder")}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setIsOpen(true)}
                            onBlur={() => setIsOpen(false)}
                        />
                    </div>
                    {isOpen && filteredTools.length > 0 && (
                        <div className="tool-dropdown">
                            <ul className="tool-list">
                                {filteredTools.map(({ name, link, icon: Icon }) => (
                                    <li
                                        key={name}
                                        className="tool-item"
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                            navigate(link);
                                        }}
                                    >
                                        <div className="tool-link">
                                            <div className="search-icon-wrapper">
                                                <Icon className="tool-icon-svg" />
                                            </div>
                                            <span className="tool-label">{name}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* --- EMBLA SLIDER --- */}
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container">
                        {toolCategories.map((category) => (
                            <div className="embla__slide" key={category.id}>
                                <div
                                    className="category-card"
                                    style={{ backgroundColor: category.color }}
                                    onClick={() => navigate(category.link)}
                                >
                                    <div className="card-top">
                                        <div className="card-icon"><category.icon /></div>
                                        <div className="card-title">{category.title}</div>
                                        <div className="tools-count">{category.count}</div>
                                    </div>
                                    <p className="card-description">{category.description}</p>
                                    <div className="card-footer">Click to explore →</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- DOTS --- */}
                <div className="slider-dots">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === selectedIndex ? "active" : ""}`}
                            onClick={() => emblaApi && emblaApi.scrollTo(index)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ToolsPage;