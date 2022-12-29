import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import AboutVision from "./AboutVision/AboutVision";
import HeroAboutContent from "./HeroAboutContent";

function HeroAbout() {
  return (
    <div className="hero-section">
      <div className="container">
        <Navbar />
        <HeroAboutContent />
        <AboutVision/>
      </div>
    </div>
  );
}

export default HeroAbout;
