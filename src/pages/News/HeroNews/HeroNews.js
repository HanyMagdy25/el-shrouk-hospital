import React from "react";
import Navbar from "../../../components/Navbar/Navbar";

function HeroNews({
  setLanguage,
  language,
  events,
  logo,
  siteName,
  loadingLogo,
}) {
  return (
    <div className="hero-about-section heroNews__customHeight">
      <div className="container">
        <Navbar
          setLanguage={setLanguage}
          language={language}
          logo={logo}
          siteName={siteName}
          loadingLogo={loadingLogo}
        />
        <div className="flex-center flex-column heroAboutContent px-5 lg:px-0">
          <div className="flex-center">
            <div className="main__title-div">
              <h2 className="main__title">
                {events?.staticNewsTitles?.newsEventsTitle}
              </h2>
            </div>
          </div>
          <p>{events?.staticNewsTitles?.newsEventsDes}</p>
        </div>
      </div>
    </div>
  );
}

export default HeroNews;
