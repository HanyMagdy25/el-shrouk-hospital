import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Team from "../../components/Team/Team";

function MeetOurTeam({ language, setLanguage }) {
  return (
    <div>
      <div className="hero-section MeetOurTeam">
        <div className="container">
          <Navbar setLanguage={setLanguage} language={language} />
          <div className="mt-11">
            <Team language={language} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetOurTeam;
