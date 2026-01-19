import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

function Navbar() {
  const { t, toggleLanguage } = useLanguage()
  const { toggleTheme } = useTheme()

  return (
    <nav className="nav">
      <div className="nav-links">
        <Link to="/">SimpleShop</Link>
        <Link to="/products">{t.products}</Link>
        <Link to="/about">{t.about}</Link>
      </div>

      <div className="nav-actions">
        <button className="icon-btn" onClick={toggleTheme}>
          🌙
        </button>

        <button className="lang-btn" onClick={toggleLanguage}>
          {t.toggleLang}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
