import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import HeroNewsInsideContent from './HeroNewsInsideContent'

function HeroNewsInside({oneNews,setLanguage,language,articleInside}) {
  return (

    <div className="hero-section heroNewsInside-section">
      <div className="container">
        <Navbar setLanguage={setLanguage} language={language}/>
        <HeroNewsInsideContent oneNews={oneNews} articleInside={articleInside}/>
      </div>
    </div>
  )
}

export default HeroNewsInside