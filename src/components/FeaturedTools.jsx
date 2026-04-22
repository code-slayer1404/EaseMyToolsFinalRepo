import { useNavigate } from 'react-router-dom';
import '../styles/FeaturedTools.css';

const FeaturedTools = () => {
  const navigate = useNavigate();

  const featuredTools = [
    {
      icon: '🖼️',
      title: 'Remove Background',
      description: 'AI-powered background removal in seconds',
      badge: 'Popular',
      path: '/remove-background'
    },
    {
      icon: '📄',
      title: 'PDF Converter',
      description: 'Convert PDFs to various formats',
      path: '/file-converter'
    },
    {
      icon: '🎨',
      title: 'Image Resizer',
      description: 'Resize images without quality loss',
      path: '/image-resizer'
    },
    {
      icon: '🔐',
      title: 'Password Generator',
      description: 'Create strong, secure passwords',
      badge: 'New',
      path: '/password-generator'
    }
  ];

  const handleToolClick = (path) => {
    navigate(path);
  };

  return (
    <section className="featured-tools">
      <div className="featured-tools__container">
        <h2 className="featured-tools__title">{'Most Popular Tools'}</h2>
        <p className="featured-tools__subtitle">{'Try our most loved tools trusted by thousands'}</p>

        <div className="featured-tools__grid">
          {featuredTools.map((tool, index) => (
            <article
              key={index}
              className="featured-tools__card"
              onClick={() => handleToolClick(tool.path)}
            >
              {tool.badge && <span className="featured-tools__badge">{tool.badge}</span>}
              <div className="featured-tools__icon">{tool.icon}</div>
              <h3 className="featured-tools__card-title">{tool.title}</h3>
              <p className="featured-tools__card-description">{tool.description}</p>
              <button type="button" className="featured-tools__button">
                {'Use Tool →'}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;
