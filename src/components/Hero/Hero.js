import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Hero.css"
import HeroContent from "./HeroContent/HeroContent";
function Hero({setLanguage}) {
  return (
    <div className="hero-section">
      <div className="container">
        <Navbar setLanguage={setLanguage}/>
        <HeroContent/> 
      </div>
    </div>
  );
}

export default Hero;
