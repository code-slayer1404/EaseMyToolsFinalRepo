import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React, { Suspense, lazy, useEffect } from "react"; // Added lazy and Suspense
import "./App.css";
import { useTheme } from "./contexts/ThemeContext";
import { useTranslation } from "react-i18next";

// Components that should likely stay eager (loaded immediately)
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackButton from "./components/BackButton";
import ScrollToTop from "./components/ScrollToTop";

// Lazy loading Pages
const HomePage = lazy(() => import("./components/HomePage"));
const ToolsPage = lazy(() => import("./components/ToolsPage"));
const CategoryToolsPage = lazy(() => import("./components/CategoryToolsPage"));

// Lazy loading Policy & Info Pages
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./components/TermsConditions"));
const CookiePolicy = lazy(() => import("./components/CookiePolicy"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

// Lazy loading Marketing/Resource Pages
const Features = lazy(() => import("./components/Features"));
const Pricing = lazy(() => import("./components/Pricing"));
const FAQ = lazy(() => import("./components/FAQ"));
const MobileApp = lazy(() => import("./components/MobileApp"));
const DesktopApp = lazy(() => import("./components/DesktopApp"));
const API = lazy(() => import("./components/API"));
const Documentation = lazy(() => import("./components/Documentation"));
const Business = lazy(() => import("./components/Business"));
const Education = lazy(() => import("./components/Education"));
const Security = lazy(() => import("./components/Security"));
const Blog = lazy(() => import("./components/Blog"));
const Press = lazy(() => import("./components/Press"));

// Lazy loading Individual Tools
const ImageResizer = lazy(() => import("./components/tools/ImageResizer"));
const UnitConverter = lazy(() => import("./components/tools/UnitConverter"));
const CaseConverter = lazy(() => import("./components/tools/CaseConverter"));
const WordCounter = lazy(() => import("./components/tools/WordCounter"));
const JSONFormatter = lazy(() => import("./components/tools/JSONFormatter"));
const ColorPicker = lazy(() => import("./components/tools/ColorPicker"));
const PercentageCalculator = lazy(() => import("./components/tools/PercentageCalculator"));
const AgeCalculator = lazy(() => import("./components/tools/AgeCalculator"));
const TimeCalculator = lazy(() => import("./components/tools/TimeCalculator"));
const CSVtoJSON = lazy(() => import("./components/tools/CSVtoJSON"));
const XMLFormatter = lazy(() => import("./components/tools/XMLFormatter"));
const URLEncoder = lazy(() => import("./components/tools/URLEncoder"));
const TextExtractor = lazy(() => import("./components/tools/TextExtractor"));
const LoremIpsumGenerator = lazy(() => import("./components/tools/LoremIpsumGenerator"));
const MarkdownPreviewer = lazy(() => import("./components/tools/MarkdownPreviewer"));
const TextDiffChecker = lazy(() => import("./components/tools/TextDiffChecker"));
const QRCodeTool = lazy(() => import("./components/tools/QRCodeTool"));
const CurrencyConverter = lazy(() => import("./components/tools/CurrencyConverter"));
const Base64Converter = lazy(() => import("./components/tools/Base64Converter"));
const DataUriGenerator = lazy(() => import("./components/tools/DataUriGenerator"));
const HashGenerator = lazy(() => import("./components/tools/HashGenerator"));
const ImageToSvg = lazy(() => import("./components/tools/ImageToSvg"));
const JwtDebugger = lazy(() => import("./components/tools/JwtDebugger"));
const NutritionMaster = lazy(() => import("./components/tools/NutritionMaster"));
const PasswordGenerator = lazy(() => import("./components/tools/PasswordGenerator"));
const RemoveBackground = lazy(() => import("./components/tools/RemoveBackground"));
const SslChecker = lazy(() => import("./components/tools/SslChecker"));
const SvgConverter = lazy(() => import("./components/tools/SvgConverter"));
const FaviconGenerator = lazy(() => import("./components/tools/FaviconGenerator"));
const PDFImageExtractor = lazy(() => import("./components/tools/PDFImageExtractor"));
const FileRenameTool = lazy(() => import("./components/tools/FileRenameTool"));
const FileConverter = lazy(() => import("./components/tools/FileConverter"));
const RegexGenerator = lazy(() => import("./components/tools/RegexGenerator"));
const WebsiteCostCalculator = lazy(() => import("./components/tools/WebsiteCostCalculator"));

function App() {
  console.log("App was rendered");

  const { theme } = useTheme();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (!localStorage.getItem("language")) {
      localStorage.setItem("language", "en");
    }
    i18n.changeLanguage(localStorage.getItem("language"));
  }, [i18n]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Loading fallback component
  const LoadingFallback = () => (
    <div className="loading-container" style={{ padding: "2rem", textAlign: "center" }}>
      <p>Loading Tool...</p>
    </div>
  );

  return (
    <Router basename="/EaseMyToolsFinalRepo/">
      <ScrollToTop></ScrollToTop>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {/* NEW: Home Page with enhanced design */}
              <Route
                path="/"
                element={
                  <>
                    <ToolsPage /> <HomePage />
                  </>
                }
              />
              {/* Existing Tools Page (keep for /tools route) */}
              <Route path="/tools" element={<ToolsPage />} />
              {/* Single Category Page with parameter */}
              <Route path="/tools/:categoryId" element={<CategoryToolsPage />} />

              {/* Policy & Info Routes */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              {/* Marketing/Resource Routes */}
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/mobile" element={<MobileApp />} />
              <Route path="/desktop" element={<DesktopApp />} />
              <Route path="/api" element={<API />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/business" element={<Business />} />
              <Route path="/education" element={<Education />} />
              <Route path="/security" element={<Security />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/press" element={<Press />} />

              {/* Individual Tool Routes */}
              <Route path="/image-resizer" element={<ImageResizer />} />
              <Route path="/color-picker" element={<ColorPicker />} />
              <Route path="/unit-converter" element={<UnitConverter />} />
              <Route path="/case-converter" element={<CaseConverter />} />
              <Route path="/currency-converter" element={<CurrencyConverter />} />
              <Route path="/base64-converter" element={<Base64Converter />} />
              <Route path="/word-counter" element={<WordCounter />} />
              <Route path="/json-formatter" element={<JSONFormatter />} />
              <Route path="/markdown-previewer" element={<MarkdownPreviewer />} />
              <Route path="/text-diff-checker" element={<TextDiffChecker />} />
              <Route path="/percentage-calculator" element={<PercentageCalculator />} />
              <Route path="/age-calculator" element={<AgeCalculator />} />
              <Route path="/time-calculator" element={<TimeCalculator />} />
              <Route path="/csv-to-json" element={<CSVtoJSON />} />
              <Route path="/xml-formatter" element={<XMLFormatter />} />
              <Route path="/url-encoder" element={<URLEncoder />} />
              <Route path="/text-extractor" element={<TextExtractor />} />
              <Route path="/lorem-ipsum-generator" element={<LoremIpsumGenerator />} />
              <Route path="/qr-code-tool" element={<QRCodeTool />} />
              <Route path="/ssl-checker" element={<SslChecker />} />
              <Route path="/svg-converter" element={<SvgConverter />} />
              <Route path="/image-to-svg" element={<ImageToSvg />} />
              <Route path="/nutrition-master" element={<NutritionMaster />} />
              <Route path="/remove-background" element={<RemoveBackground />} />
              <Route path="/hash-generator" element={<HashGenerator />} />
              <Route path="/password-generator" element={<PasswordGenerator />} />
              <Route path="/jwt-debugger" element={<JwtDebugger />} />
              <Route path="/data-uri-generator" element={<DataUriGenerator />} />
              <Route path="/favicon-generator" element={<FaviconGenerator />} />
              <Route path="/pdfImage-extractor" element={<PDFImageExtractor />} />
              <Route path="/file-rename-tool" element={<FileRenameTool />} />
              <Route path="/file-converter" element={<FileConverter />} />
              <Route path="/regex-generator" element={<RegexGenerator />} />
              <Route path="/website-cost-calculator" element={<WebsiteCostCalculator />} />

              {/* 404 Page */}
              <Route
                path="*"
                element={
                  <div className="not-found">
                    <h1>404 - Page Not Found</h1>
                    <p>The page you're looking for doesn't exist.</p>
                    <BackButton />
                  </div>
                }
              />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;