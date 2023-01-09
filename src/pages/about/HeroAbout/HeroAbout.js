import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import HeroAboutContent from "./HeroAboutContent";

function HeroAbout({ setLanguage, language, aboutData, loadingAbout }) {
  return (
    <div className="hero-section">
      <div className="container">
        <Navbar setLanguage={setLanguage} language={language} />
        <HeroAboutContent
          language={language}
          aboutData={aboutData}
          loadingAbout={loadingAbout}
        />
      </div>
    </div>
  );
}

export default HeroAbout;
