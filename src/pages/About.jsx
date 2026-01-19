import { useLanguage } from '../context/LanguageContext.jsx'

function About() {
  const { t } = useLanguage()

  return (
    <div className="container">
      <h1>{t.about}</h1>
      <p>{t.aboutText}</p>
    </div>
  )
}

export default About
