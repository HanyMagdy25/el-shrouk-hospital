import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Team from "../../components/Team/Team";

function MeetOurTeam({ language, setLanguage, logo, siteName, loadingLogo }) {
  return (
    <div>
      <div className="hero-section MeetOurTeam">
        <div className="container">
          <Navbar
            setLanguage={setLanguage}
            language={language}
            logo={logo}
            siteName={siteName}
            loadingLogo={loadingLogo}
          />
          <div className="mt-11">
            <Team language={language} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetOurTeam;
