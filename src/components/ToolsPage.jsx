import { useState, useRef, useEffect } from "react";
import "../styles/ToolsPage.css";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import { getToolCategories, getAllTools } from "../data/toolsData";
import Header from "./Header";

const ToolsPage = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const { theme } = useTheme();
    const { t } = useTranslation("tools");

    // Touch swipe references
    const sliderRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [prevTranslate, setPrevTranslate] = useState(0);

    const toolCategories = getToolCategories();
    const allTools = getAllTools();

    const cardsPerSlide = 4; //fix it later
    const totalSlides = Math.ceil(toolCategories.length / cardsPerSlide);

    const filteredTools = searchQuery.trim()
        ? allTools.filter((tool) =>
            tool.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : [];

    const toolList = filteredTools.map(({ name, link, icon: Icon }) => (
        <li key={name} className="tool-item">
            <div
                className="tool-link"
                onClick={() => {
                    navigate(link);
                }}
            >
                <Icon className="tool-icon" />
                <span className="tool-label">{name}</span>
            </div>
        </li>
    ));

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Touch swipe handlers with less sensitivity
    const handleTouchStart = (e) => {
        setIsDragging(true);
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        setStartX(clientX);
        setPrevTranslate(currentTranslate);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const diff = clientX - startX;
        // Apply resistance for less sensitivity
        setCurrentTranslate(prevTranslate + diff * 0.5);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        const movedBy = currentTranslate - prevTranslate;

        // Increased threshold for less sensitivity (100px)
        if (Math.abs(movedBy) > 50) {
            if (movedBy > 0) {
                // Swiped right - go to previous slide
                prevSlide();
            } else {
                // Swiped left - go to next slide
                nextSlide();
            }
        }

        // Reset translate
        setCurrentTranslate(-currentSlide * 100);
    };

    // Mouse drag handlers for desktop
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
        setPrevTranslate(currentTranslate);
        e.preventDefault();
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const diff = e.clientX - startX;
        // Apply more resistance for mouse (slower)
        setCurrentTranslate(prevTranslate + diff * 0.2);
    };

    const handleMouseUp = () => {
        handleTouchEnd();
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            handleTouchEnd();
        }
    };

    // Update translate when slide changes
    useEffect(() => {
        setCurrentTranslate(-currentSlide * 100);
    }, [currentSlide]);

    // Add/remove event listeners for mouse drag on desktop
    useEffect(() => {
        const sliderElement = sliderRef.current;
        if (!sliderElement) return;

        sliderElement.addEventListener('mousedown', handleMouseDown);
        sliderElement.addEventListener('mousemove', handleMouseMove);
        sliderElement.addEventListener('mouseup', handleMouseUp);
        sliderElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            sliderElement.removeEventListener('mousedown', handleMouseDown);
            sliderElement.removeEventListener('mousemove', handleMouseMove);
            sliderElement.removeEventListener('mouseup', handleMouseUp);
            sliderElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isDragging, startX, prevTranslate, currentTranslate]);

    return (
        <>
            <Header />
            <div className={`tools-page ${theme}`}>
                {/* 🔍 Search Bar */}
                <div className="search-container">
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder={t("searchPlaceholder")}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setIsOpen(true)}
                            onBlur={() => setTimeout(() => setIsOpen(false), 500)}
                        />
                    </div>
                    {isOpen && filteredTools.length > 0 && (
                        <div className="tool-dropdown">
                            <ul className="tool-list">{toolList}</ul>
                        </div>
                    )}
                </div>

                {/* 🎠 Tool Categories Slider with Touch Swipe */}
                <div className="categories-slider">
                    <div className="cards-grid-wrapper">
                        <div
                            className="slider-container"
                            ref={sliderRef}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div
                                className="slider-track"
                                style={{
                                    transform: `translateX(${currentTranslate}%)`,
                                    transition: isDragging ? 'none' : 'transform 0.7s ease-in-out'
                                }}
                            >
                                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                    <div key={slideIndex} className="cards-grid">
                                        {toolCategories
                                            .slice(
                                                slideIndex * cardsPerSlide,
                                                slideIndex * cardsPerSlide + cardsPerSlide
                                            )
                                            .map((category) => (
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
                                                    <div className="card-footer">Click to explore →</div>
                                                </div>
                                            ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Slider Dots */}
                    {totalSlides > 1 && (
                        <div className="slider-dots">
                            {Array.from({ length: totalSlides }).map((_, index) => (
                                <button
                                    key={index}
                                    className={`dot ${index === currentSlide ? "active" : ""}`}
                                    onClick={() => goToSlide(index)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ToolsPage;