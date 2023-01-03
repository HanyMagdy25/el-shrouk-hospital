import React from 'react'
import HeroAbout from './HeroAbout/HeroAbout'
import "./About.css"
import AboutVision from './HeroAbout/AboutVision/AboutVision'
function About() {
  return (
    <div className='about '>
        <HeroAbout/>
        <AboutVision/>
    </div>
  )
}

export default About