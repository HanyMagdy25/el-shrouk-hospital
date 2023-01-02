import React from "react";
import Navbar from "../../../components/Navbar/Navbar";

function HeroNews() {
  return (
    <div className="hero-section">
      <div className="container">
        <Navbar />
        <div className="flex-center flex-column heroAboutContent">
          <div className="flex-center">
            <div className="main__title-div">
              <h2 className="main__title">News & Events</h2>
            </div>
          </div>
          <p>
            Al Shorouk Specialised Hospital (Swiss) is one of the newly
            established medical facilities in the Arab Republic of Egypt, we
            belongs to Swiss Hospitals Management Company, which aspires to gain
            the confidence of all its clients, including individuals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroNews;
