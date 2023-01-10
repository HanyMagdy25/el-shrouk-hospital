import React from "react";
import HeroContact from "./HeroContact/HeroContact";

function ContactUsPage({ language, setLanguage, logo, siteName, loadingLogo }) {
  return (
    <div>
      <HeroContact
        language={language}
        setLanguage={setLanguage}
        logo={logo}
        siteName={siteName}
        loadingLogo={loadingLogo}
      />
    </div>
  );
}

export default ContactUsPage;
