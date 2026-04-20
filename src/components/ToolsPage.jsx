import { useState, useRef, useEffect, useCallback } from "react";
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

    const toolCategories = getToolCategories();
    const allTools = getAllTools();
    const cardsPerSlide = 4;
    const realSlides = Math.ceil(toolCategories.length / cardsPerSlide);

    const [searchQuery, setSearchQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [enableTransition, setEnableTransition] = useState(true);
    const [dragOffset, setDragOffset] = useState(0);

    // Track if the movement was large enough to be a "drag" and not a "click"
    const [hasMoved, setHasMoved] = useState(false);

    const sliderRef = useRef(null);
    const startX = useRef(0);

    const filteredTools = searchQuery.trim()
        ? allTools.filter((t) => t.name.toLowerCase().includes(searchQuery.toLowerCase()))
        : [];

    const next = useCallback(() => {
        if (realSlides === 0) return;
        setEnableTransition(true);
        setCurrentIndex((prev) => prev + 1);
    }, [realSlides]);

    const prev = useCallback(() => {
        if (realSlides === 0) return;
        setEnableTransition(true);
        setCurrentIndex((prev) => prev - 1);
    }, [realSlides]);

    /* --- AUTO SCROLL --- */
    useEffect(() => {
        let intervalId;
        if (!isDragging && !isHovered && realSlides > 0 && !document.hidden) {
            intervalId = setInterval(next, AUTO_SCROLL_INTERVAL);
        }
        return () => clearInterval(intervalId);
    }, [isDragging, isHovered, realSlides, next]);

    /* --- DRAG HANDLERS --- */
    const handleStart = (clientX) => {
        setIsDragging(true);
        setHasMoved(false); // Reset movement flag
        setEnableTransition(false);
        startX.current = clientX;
    };

    const handleMove = (clientX) => {
        if (!isDragging) return;
        const diff = clientX - startX.current;

        // If moved more than 5px, it's officially a drag, not a click
        if (Math.abs(diff) > 5) {
            setHasMoved(true);
        }
        setDragOffset(diff);
    };

    const handleEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);
        setEnableTransition(true);

        // Lower threshold (50px) to make it easier to switch sections
        if (Math.abs(dragOffset) > 50) {
            if (dragOffset > 0) prev();
            else next();
        }

        setDragOffset(0);
    };

    /* --- GLOBAL MOUSE UP SAFETY --- */
    useEffect(() => {
        const handleGlobalUp = () => {
            if (isDragging) handleEnd();
        };
        window.addEventListener("mouseup", handleGlobalUp);
        return () => window.removeEventListener("mouseup", handleGlobalUp);
    }, [isDragging, dragOffset]);

    /* --- CLONE CORRECTION --- */
    const handleTransitionEnd = () => {
        if (currentIndex === 0) {
            setEnableTransition(false);
            setCurrentIndex(realSlides);
        } else if (currentIndex >= realSlides + 1) {
            setEnableTransition(false);
            setCurrentIndex(1);
        }
    };

    const getSlide = (idx) => toolCategories.slice((idx - 1) * cardsPerSlide, idx * cardsPerSlide);

    const slides = realSlides > 0 ? [
        getSlide(realSlides),
        ...Array.from({ length: realSlides }, (_, i) => getSlide(i + 1)),
        getSlide(1)
    ] : [];

    const containerWidth = sliderRef.current?.offsetWidth || 1;
    const dragPercent = (dragOffset / containerWidth) * 100;
    const finalTranslateX = -(currentIndex * 100) + dragPercent;

    return (
        <>
            <Header />
            <div className={`tools-page ${theme}`}>
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
                </div>

                <div className="categories-slider">
                    {realSlides > 0 && (
                        <div
                            className="slider-container"
                            ref={sliderRef}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onMouseDown={(e) => handleStart(e.clientX)}
                            onMouseMove={(e) => handleMove(e.clientX)}
                            onMouseUp={handleEnd}
                            onTouchStart={(e) => handleStart(e.touches[0].clientX)}
                            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
                            onTouchEnd={handleEnd}
                            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                        >
                            <div
                                className="slider-track"
                                onTransitionEnd={handleTransitionEnd}
                                style={{
                                    transform: `translateX(${finalTranslateX}%)`,
                                    transition: enableTransition ? "transform 0.5s ease-out" : "none",
                                    display: 'flex',
                                    userSelect: 'none'
                                }}
                            >
                                {slides.map((group, i) => (
                                    <div key={`slide-${i}`} className="cards-grid" style={{ minWidth: '100%', flexShrink: 0 }}>
                                        {group.map((category) => (
                                            <div
                                                key={category.id}
                                                className="category-card"
                                                style={{ backgroundColor: category.color }}
                                                onClick={(e) => {
                                                    // CRITICAL: Only navigate if the user didn't drag
                                                    if (!hasMoved) {
                                                        navigate(category.link);
                                                    }
                                                }}
                                            >
                                                <div className="card-top">
                                                    <div className="card-icon"><category.icon /></div>
                                                    <div className="card-title">{category.title}</div>
                                                    <div className="tools-count">{category.count}</div>
                                                </div>
                                                <p className="card-description">{category.description}</p>
                                                <div className="card-footer">Click to explore →</div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="slider-dots">
                        {Array.from({ length: realSlides }).map((_, i) => (
                            <button
                                key={i}
                                className={`dot ${currentIndex === i + 1 ? "active" : ""}`}
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