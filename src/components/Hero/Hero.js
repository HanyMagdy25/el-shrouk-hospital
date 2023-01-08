import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Hero.css";
import HeroContent from "./HeroContent/HeroContent";
function Hero({ setLanguage, language, mainPageHero, loadingSettings }) {
  return (
    <div className="hero-section">
      <div className="container">
        <Navbar setLanguage={setLanguage} language={language} />
        <HeroContent
          mainPageHero={mainPageHero}
          language={language}
          loadingSettings={loadingSettings}
        />
      </div>
    </div>
  );
}

export default Hero;
