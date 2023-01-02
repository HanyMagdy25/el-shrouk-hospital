import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import HeroAboutContent from "./HeroAboutContent";

function HeroAbout() {
  return (
    <div className="hero-section">
      <div className="container">
        <Navbar />
        <HeroAboutContent />
      </div>
    </div>
  );
}

export default HeroAbout;
