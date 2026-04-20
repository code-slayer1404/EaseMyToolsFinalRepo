// import "../styles/Footer.css";
// import { useTheme } from "../contexts/ThemeContext";

// const Footer = () => {
//   const { theme } = useTheme();

//   return (
//     <footer className={`footer ${theme}`}>
//       <div className="footer-container">
//         <div className="footer-column">
//           <h4>PRODUCT</h4>
//           <Link to="/home">Home</Link>
//           <Link to="/features">Features</Link>
//           <Link to="/pricing">Pricing</Link>
//           <Link to="/tools">Tools</Link>
//           <Link to="/faq">FAQ</Link>
//         </div>

//         <div className="footer-column">
//           <h4>RESOURCES</h4>
//           <Link to="/desktop">EaseMyTools Desktop</Link>
//           <Link to="/mobile">EaseMyTools Mobile</Link>
//           <Link to="/api">API</Link>
//           <Link to="/docs">Documentation</Link>
//         </div>

//         <div className="footer-column">
//           <h4>SOLUTIONS</h4>
//           <Link to="/business">Business</Link>
//           <Link to="/education">Education</Link>
//         </div>

//         <div className="footer-column">
//           <h4>LEGAL</h4>
//           <Link to="/security">Security</Link>
//           <Link to="/privacy">Privacy Policy</Link>
//           <Link to="/terms">Terms & Conditions</Link>
//           <Link to="/cookies">Cookies</Link>
//         </div>

//         <div className="footer-column">
//           <h4>COMPANY</h4>
//           <Link to="/about">About Us</Link>
//           <Link to="/contact">Contact Us</Link>
//           <Link to="/blog">Blog</Link>
//           <Link to="/press">Press</Link>
//         </div>
//       </div>

//       <hr className="footer-divider" />

//       <div className="footer-bottom">
//         <div className="footer-lang">
//           <select>
//             <option>English</option>
//             <option>हिंदी</option>
//           </select>
//         </div>

//         <div className="footer-social">
//           <Link to="/twitter">✖</Link>
//           <Link to="/facebook">📘</Link>
//           <Link to="/linkedin">💼</Link>
//           <Link to="/instagram">📸</Link>
//           <Link to="/tiktok">🎵</Link>
//         </div>

//         <div className="footer-copy">
//           © {new Date().getFullYear()} EaseMyTools — All Rights Reserved
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




// import "../styles/Footer.css";
// import { useTheme } from "../contexts/ThemeContext";
// import LanguageSelector from "./LanguageSelector";

// const Footer = () => {
//   const { theme } = useTheme();

//   return (
//     <footer className={`footer ${theme}`}>
//       <div className="footer-container">
//         <div className="footer-column">
//           <h4>PRODUCT</h4>
//           <Link to="/home">Home</Link>
//           <Link to="/features">Features</Link>
//           <Link to="/pricing">Pricing</Link>
//           <Link to="/tools">Tools</Link>
//           <Link to="/faq">FAQ</Link>
//         </div>

//         <div className="footer-column">
//           <h4>RESOURCES</h4>
//           <Link to="/desktop">EaseMyTools Desktop</Link>
//           <Link to="/mobile">EaseMyTools Mobile</Link>
//           <Link to="/api">API</Link>
//           <Link to="/docs">Documentation</Link>
//         </div>

//         <div className="footer-column">
//           <h4>SOLUTIONS</h4>
//           <Link to="/business">Business</Link>
//           <Link to="/education">Education</Link>
//         </div>

//         <div className="footer-column">
//           <h4>LEGAL</h4>
//           <Link to="/security">Security</Link>
//           <Link to="/privacy">Privacy Policy</Link>
//           <Link to="/terms">Terms & Conditions</Link>
//           <Link to="/cookies">Cookies</Link>
//         </div>

//         <div className="footer-column">
//           <h4>COMPANY</h4>
//           <Link to="/about">About Us</Link>
//           <Link to="/contact">Contact Us</Link>
//           <Link to="/blog">Blog</Link>
//           <Link to="/press">Press</Link>
//         </div>
//       </div>

//       <hr className="footer-divider" />

//       <div className="footer-bottom">
//         {/* <div className="footer-lang">
//           <select>
//             <option>English</option>
//             <option>हिंदी</option>
//           </select>
//         </div> */}

//         <LanguageSelector/>

//         <div className="footer-social">
//           <Link to="/twitter">✖</Link>
//           <Link to="/facebook">📘</Link>
//           <Link to="/linkedin">💼</Link>
//           <Link to="/instagram">📸</Link>
//           <Link to="/tiktok">🎵</Link>
//         </div>

//         <div className="footer-copy">
//           © {new Date().getFullYear()} EaseMyTools — All Rights Reserved
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/Footer.css";
import { useTheme } from "../contexts/ThemeContext";
import LanguageSelector from "./LanguageSelector";

const Footer = () => {
  console.log("Footer was rendered");
  
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-container">
        <div className="footer-column">
          <h4>PRODUCT</h4>
          <Link to="/" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>{t('footer.home', 'Home')}</Link>
          <Link to="/features" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>{t('footer.features', 'Features')}</Link>
          <Link to="/pricing" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>{t('footer.pricing', 'Pricing')}</Link>
          <Link to="/tools" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>{t('footer.tools', 'Tools')}</Link>
          <Link to="/faq" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>{t('footer.faq', 'FAQ')}</Link>
        </div>

        <div className="footer-column">
          <h4>RESOURCES</h4>
          <Link to="/desktop" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>{t('footer.desktop', 'EaseMyTools Desktop')}</Link>
          <Link to="/mobile" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>{t('footer.mobile', 'EaseMyTools Mobile')}</Link>
          <Link to="/api" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>{t('footer.api', 'API')}</Link>
          <Link to="/docs" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>{t('footer.documentation', 'Documentation')}</Link>
        </div>

        <div className="footer-column">
          <h4>SOLUTIONS</h4>
          <Link to="/business" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>{t('footer.business', 'Business')}</Link>
          <Link to="/education" onClick={()=>{window.scrollTo({top:0, behavior:"smooth"})}}>{t('footer.education', 'Education')}</Link>
        </div>

        <div className="footer-column">
          <h4>LEGAL</h4>
          <Link to="/security" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>{t('footer.security', 'Security')}</Link>
          <Link to="/privacy-policy" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>{t('footer.privacy', 'Privacy Policy')}</Link>
          <Link to="/terms-conditions" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>{t('footer.terms', 'Terms & Conditions')}</Link>
          <Link to="/cookie-policy" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>{t('footer.cookies', 'Cookie Policy')}</Link>
        </div>

        <div className="footer-column">
          <h4>COMPANY</h4>
          <Link to="/about" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>{t('footer.about', 'About Us')}</Link>
          <Link to="/contact" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>{t('footer.contact', 'Contact Us')}</Link>
          <Link to="/blog" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>{t('footer.blog', 'Blog')}</Link>
          <Link to="/press" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>{t('footer.press', 'Press')}</Link>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <LanguageSelector />

        <div className="footer-social">
          <Link to="https://twitter.com/easemytools" target="_blank" rel="noopener noreferrer" title="Twitter">
            ✖
          </Link>
          <Link to="https://facebook.com/easemytools" target="_blank" rel="noopener noreferrer" title="Facebook">
            📘
          </Link>
          <Link to="https://linkedin.com/company/easemytools" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            💼
          </Link>
          <Link to="https://instagram.com/easemytools" target="_blank" rel="noopener noreferrer" title="Instagram">
            📸
          </Link>
          <Link to="https://tiktok.com/@easemytools" target="_blank" rel="noopener noreferrer" title="TikTok">
            🎵
          </Link>
        </div>

        <div className="footer-copy">
          © {new Date().getFullYear()} EaseMyTools — {t('footer.rights', 'All Rights Reserved')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;