import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import Modal from '../components/Modal'

function Home() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>{t.home}</h1>
        <p>{t.homeText}</p>

        <div className="hero-actions">
          <Link to="/products" className="primary-btn">
            {t.products}
          </Link>

          <button
            className="secondary-btn"
            onClick={() => setIsOpen(true)}
          >
            {t.openModal}
          </button>
        </div>
      </div>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <h2>{t.modalTitle}</h2>
          <p>{t.modalText}</p>
        </Modal>
      )}
    </section>
  )
}

export default Home
