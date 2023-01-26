import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import HeroNewsInsideContent from "./HeroNewsInsideContent";

function HeroNewsInside({
  oneNews,
  setLanguage,
  language,
  articleInside,
  logo,
  siteName,
  loadingLogo,
}) {
  return (
    <div className="hero-about-section heroNewsInside-section">
      <div className="container">
        <Navbar
          setLanguage={setLanguage}
          language={language}
          logo={logo}
          siteName={siteName}
          loadingLogo={loadingLogo}
        />
        <HeroNewsInsideContent
          oneNews={oneNews}
          articleInside={articleInside}
        />
      </div>
    </div>
  );
}

export default HeroNewsInside;
