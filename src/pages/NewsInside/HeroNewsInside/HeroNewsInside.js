import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import HeroNewsInsideContent from './HeroNewsInsideContent'

function HeroNewsInside({oneNews,setLanguage}) {
  return (

    <div className="hero-section heroNewsInside-section">
      <div className="container">
        <Navbar setLanguage={setLanguage}/>
        <HeroNewsInsideContent oneNews={oneNews}/>
      </div>
    </div>
  )
}

export default HeroNewsInside