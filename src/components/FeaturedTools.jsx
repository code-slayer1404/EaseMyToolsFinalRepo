
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import '../styles/FeaturedTools.css';

const FeaturedTools = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const featuredTools = [
    {
      icon: '🖼️',
      title: t('featured.removeBg', 'Remove Background'),
      description: t('featured.removeBgDesc', 'AI-powered background removal in seconds'),
      badge: 'Popular',
      path: '/remove-background'
    },
    {
      icon: '📄',
      title: t('featured.pdfConverter', 'PDF Converter'),
      description: t('featured.pdfConverterDesc', 'Convert PDFs to various formats'),
      path: '/file-converter' // Update this to match your actual PDF tool route
    },
    {
      icon: '🎨',
      title: t('featured.imageResizer', 'Image Resizer'),
      description: t('featured.imageResizerDesc', 'Resize images without quality loss'),
      path: '/image-resizer'
    },
    {
      icon: '🔐',
      title: t('featured.passwordGen', 'Password Generator'),
      description: t('featured.passwordGenDesc', 'Create strong, secure passwords'),
      badge: 'New',
      path: '/password-generator'
    }
  ];

  const handleToolClick = (path) => {
    navigate(path);
  };

  return (
    <section className="featured-tools">
      <div className="container">
        <h2>{t('featured.title', 'Most Popular Tools')}</h2>
        <p className="section-subtitle">
          {t('featured.subtitle', 'Try our most loved tools trusted by thousands')}
        </p>
        <div className="tools-grid">
          {featuredTools.map((tool, index) => (
            <div 
              key={index} 
              className="tool-card"
              onClick={() => handleToolClick(tool.path)}
            >
              {tool.badge && <span className="tool-badge">{tool.badge}</span>}
              <div className="tool-icon">{tool.icon}</div>
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
              <button className="tool-btn">
                {t('featured.useTool', 'Use Tool →')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;