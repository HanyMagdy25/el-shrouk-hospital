import React from 'react'
import HeroContact from './HeroContact/HeroContact'

function ContactUsPage({language,setLanguage}) {
  return (
    <div>
        <HeroContact language={language} setLanguage={setLanguage}/>
    </div>
  )
}

export default ContactUsPage