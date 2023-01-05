import React from 'react'
import ContactUsForm from '../../../components/ContactUsForm/ContactUsForm'
import Navbar from '../../../components/Navbar/Navbar'

function HeroContact({setLanguage ,language}) {
  return (
    <div className="hero-section">
      <div className="container">
        <Navbar setLanguage={setLanguage} language={language} />
        <ContactUsForm language={language}/>
      </div>
    </div>
  )
}

export default HeroContact