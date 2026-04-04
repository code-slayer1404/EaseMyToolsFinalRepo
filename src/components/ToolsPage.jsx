import { useState, useRef, useEffect } from "react";
import "../styles/ToolsPage.css";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import { getToolCategories, getAllTools } from "../data/toolsData";
import Header from "./Header";

const AUTO_SCROLL_INTERVAL = 2500;

const ToolsPage = () => {
    const navigate = useNavigate();
    const { theme } = useTheme();
    const { t } = useTranslation("tools");

    /* ---------------- DATA ---------------- */

    const toolCategories = getToolCategories();
    const allTools = getAllTools();

    const cardsPerSlide = 4;
    const realSlides = Math.ceil(toolCategories.length / cardsPerSlide);

    /* ---------------- SEARCH ---------------- */

    const [searchQuery, setSearchQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const filteredTools = searchQuery.trim()
        ? allTools.filter((t) =>
            t.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : [];

    /* ---------------- SLIDER STATE ---------------- */

    // index 1..realSlides (0 and realSlides+1 are clones)
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [enableTransition, setEnableTransition] = useState(true);

    const sliderRef = useRef(null);
    const startX = useRef(0);
    const dragOffset = useRef(0);

    /* ---------------- SLIDE HELPERS ---------------- */

    const next = () => {
        setEnableTransition(true);
        setCurrentIndex((i) => i + 1);
    };

    const prev = () => {
        setEnableTransition(true);
        setCurrentIndex((i) => i - 1);
    };

    /* ---------------- DRAG LOGIC ---------------- */

    const startDrag = (x) => {
        setIsDragging(true);
        setEnableTransition(false);
        startX.current = x;
        dragOffset.current = 0;
    };

    const moveDrag = (x, resistance = 0.3) => {
        if (!isDragging) return;
        dragOffset.current = (x - startX.current) * resistance;
    };

    const endDrag = () => {
        if (!isDragging) return;

        setIsDragging(false);
        setEnableTransition(true);

        const moved = dragOffset.current;
        dragOffset.current = 0;

        if (Math.abs(moved) > 30) {
            moved > 0 ? prev() : next();
        }
    };

    /* Touch */
    const onTouchStart = (e) => startDrag(e.touches[0].clientX);
    const onTouchMove = (e) => moveDrag(e.touches[0].clientX);
    const onTouchEnd = endDrag;

    /* Mouse */
    useEffect(() => {
        const el = sliderRef.current;
        if (!el) return;

        const down = (e) => startDrag(e.clientX);
        const move = (e) => moveDrag(e.clientX, 0.2);
        const up = () => endDrag();

        el.addEventListener("mousedown", down);
        el.addEventListener("mousemove", move);
        el.addEventListener("mouseup", up);
        el.addEventListener("mouseleave", up);

        return () => {
            el.removeEventListener("mousedown", down);
            el.removeEventListener("mousemove", move);
            el.removeEventListener("mouseup", up);
            el.removeEventListener("mouseleave", up);
        };
    }, [isDragging]);

    /* ---------------- AUTO SCROLL ---------------- */

    useEffect(() => {
        if (isDragging || isHovered || document.hidden) return;

        const id = setInterval(next, AUTO_SCROLL_INTERVAL);
        return () => clearInterval(id);
    }, [isDragging, isHovered]);

    /* ---------------- VISIBILITY FIX (CRITICAL) ---------------- */

    useEffect(() => {
        const onVisibilityChange = () => {
            if (document.hidden) {
                // freeze safely when tab is hidden
                setEnableTransition(false);
                dragOffset.current = 0;
            } else {
                // resume safely
                setEnableTransition(true);

                // clamp index to valid range
                setCurrentIndex((i) => {
                    if (i < 1) return 1;
                    if (i > realSlides) return realSlides;
                    return i;
                });
            }
        };

        document.addEventListener("visibilitychange", onVisibilityChange);
        return () =>
            document.removeEventListener("visibilitychange", onVisibilityChange);
    }, [realSlides]);

    /* ---------------- CLONE CORRECTION ---------------- */

    const handleTransitionEnd = () => {
        if (currentIndex === 0) {
            setEnableTransition(false);
            setCurrentIndex(realSlides);
        }

        if (currentIndex === realSlides + 1) {
            setEnableTransition(false);
            setCurrentIndex(1);
        }
    };

    /* ---------------- SLIDES ---------------- */

    const getSlide = (index) =>
        toolCategories.slice(
            (index - 1) * cardsPerSlide,
            index * cardsPerSlide
        );

    const slides = [
        getSlide(realSlides), // clone last
        ...Array.from({ length: realSlides }, (_, i) => getSlide(i + 1)),
        getSlide(1), // clone first
    ];

    /* ---------------- TRANSLATE (DERIVED) ---------------- */

    const translateX = -currentIndex * 100 + dragOffset.current;

    /* ---------------- RENDER ---------------- */

    return (
        <>
            <Header />

            <div className={`tools-page ${theme}`}>
                {/* 🔍 Search */}
                <div className="search-container">
                    <div className="search-bar">
                        <input
                            placeholder={t("searchPlaceholder")}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setIsOpen(true)}
                            onBlur={() => setTimeout(() => setIsOpen(false), 200)}
                        />
                    </div>

                    {isOpen && filteredTools.length > 0 && (
                        <div className="tool-dropdown">
                            <ul className="tool-list">
                                {filteredTools.map(({ name, link, icon: Icon }) => (
                                    <li key={name} className="tool-item">
                                        <div
                                            className="tool-link"
                                            onClick={() => navigate(link)}
                                        >
                                            <Icon className="tool-icon" />
                                            <span className="tool-label">{name}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* 🎠 Slider */}
                <div className="categories-slider">
                    <div
                        className="slider-container"
                        ref={sliderRef}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        <div
                            className="slider-track"
                            onTransitionEnd={handleTransitionEnd}
                            style={{
                                transform: `translateX(${translateX}%)`,
                                transition: enableTransition
                                    ? "transform 0.7s ease"
                                    : "none",
                            }}
                        >
                            {slides.map((group, i) => (
                                <div key={i} className="cards-grid">
                                    {group.map((category) => (
                                        <div
                                            key={category.id}
                                            className="category-card"
                                            style={{ backgroundColor: category.color }}
                                            onClick={() => navigate(category.link)}
                                        >
                                            <div className="card-top">
                                                <div className="card-icon">
                                                    <category.icon />
                                                </div>
                                                <div className="card-title">{category.title}</div>
                                                <div className="tools-count">
                                                    {category.count}
                                                </div>
                                            </div>

                                            <p className="card-description">
                                                {category.description}
                                            </p>

                                            <div className="card-footer">
                                                Click to explore →
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="slider-dots">
                        {Array.from({ length: realSlides }).map((_, i) => (
                            <button
                                key={i}
                                className={`dot ${currentIndex === i + 1 ? "active" : ""
                                    }`}
                                onClick={() => {
                                    setEnableTransition(true);
                                    setCurrentIndex(i + 1);
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ToolsPage;
