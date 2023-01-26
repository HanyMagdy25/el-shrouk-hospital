import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import HeroAboutContent from "./HeroAboutContent";

function HeroAbout({
  setLanguage,
  language,
  aboutData,
  loadingAbout,
  logo,
  siteName,
  loadingLogo,
}) {
  return (
    <div className="hero-about-section">
      <div className="container">
        <Navbar
          setLanguage={setLanguage}
          language={language}
          logo={logo}
          siteName={siteName}
          loadingLogo={loadingLogo}
        />
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
