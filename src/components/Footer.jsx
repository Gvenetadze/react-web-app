import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-brand">SimpleShop</span>

        <nav className="footer-links">
          <Link to="/">{t.home}</Link>
          <Link to="/products">{t.products}</Link>
          <Link to="/about">{t.about}</Link>
        </nav>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} SimpleShop. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
