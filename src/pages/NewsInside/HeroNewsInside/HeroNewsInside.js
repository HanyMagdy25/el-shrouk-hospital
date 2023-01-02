import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import HeroNewsInsideContent from './HeroNewsInsideContent'

function HeroNewsInside({oneNews}) {
  return (

    <div className="hero-section heroNewsInside-section">
      <div className="container">
        <Navbar />
        <HeroNewsInsideContent oneNews={oneNews}/>
      </div>
    </div>
  )
}

export default HeroNewsInside