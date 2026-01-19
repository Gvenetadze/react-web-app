import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

const translations = {
  en: {
    home: 'SimpleShop',
    homeText: 'Discover quality products at affordable prices.',
    openModal: 'View Offer',
    modalTitle: 'Special Offer 🎉',
    modalText: 'Free delivery on orders over $50!',
    products: 'Products',
    about: 'About Us',
  aboutText:
  'SimpleShop is an online store offering a wide range of quality products. Our goal is to provide customers with a simple, fast, and enjoyable shopping experience.',
    toggleLang: 'GE'
  },
  ge: {
    home: 'SimpleShop',
    homeText: 'აღმოაჩინეთ ხარისხიანი პროდუქტები ხელმისაწვდომ ფასებში.',
    openModal: 'შეთავაზების ნახვა',
    modalTitle: 'სპეციალური შეთავაზება 🎉',
    modalText: 'უფასო მიწოდება 50$-ზე მეტი შეკვეთებისთვის!',
    products: 'პროდუქტები',
    about: 'ჩვენს შესახებ',
   aboutText:
  'SimpleShop არის ონლაინ მაღაზია, რომელიც მომხმარებლებს სთავაზობს ხარისხიან და მრავალფეროვან პროდუქტებს. ჩვენი მიზანია მარტივი და სასიამოვნო შოპინგ გამოცდილება.',
    toggleLang: 'ENG'
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(
    localStorage.getItem('lang') || 'en'
  )

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'ge' : 'en'))
  }

  return (
    <LanguageContext.Provider
      value={{ lang, t: translations[lang], toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
