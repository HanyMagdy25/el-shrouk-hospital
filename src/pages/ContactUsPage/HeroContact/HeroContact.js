import React from "react";
import ContactUsForm from "../../../components/ContactUsForm/ContactUsForm";
import Navbar from "../../../components/Navbar/Navbar";

function HeroContact({ setLanguage, language, logo, siteName, loadingLogo }) {
  return (
    <div className="hero-section">
      <div className="container">
        <Navbar
          setLanguage={setLanguage}
          language={language}
          logo={logo}
          siteName={siteName}
          loadingLogo={loadingLogo}
        />
        <ContactUsForm language={language} />
      </div>
    </div>
  );
}

export default HeroContact;
