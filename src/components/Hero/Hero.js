import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Hero.css"
import HeroContent from "./HeroContent/HeroContent";
function Hero() {
  return (
    <div className="hero-section">
      <div className="container">
        <Navbar/>
        <HeroContent/> 
      </div>
    </div>
  );
}

export default Hero;
