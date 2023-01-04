import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import HeroAboutContent from "./HeroAboutContent";

function HeroAbout({ setLanguage }) {
  return (
    <div className="hero-section">
      <div className="container">
        <Navbar setLanguage={setLanguage} />
        <HeroAboutContent />
      </div>
    </div>
  );
}

export default HeroAbout;
