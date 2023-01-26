import React, { useEffect, useState } from "react";
import HeroAbout from "./HeroAbout/HeroAbout";
import "./About.css";
import AboutVision from "./HeroAbout/AboutVision/AboutVision";
const url_main = "https://el-shrouk-hospital-dashboard.technomasrsystems.com";
function About({ setLanguage, language, logo, siteName, loadingLogo }) {
  // To Fetch About
  const [loadingAbout, setLoadingAbout] = useState(true);
  const [aboutData, setAboutData] = useState([]);
  useEffect(() => {
    fetch(`${url_main}/api/aboutus`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        lang: language,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoadingAbout(false);
        setAboutData(data);
      });
  }, [language]);
  return (
    <div className="about">
      <HeroAbout
        setLanguage={setLanguage}
        language={language}
        aboutData={aboutData}
        loadingAbout={loadingAbout}
        logo={logo}
        siteName={siteName}
        loadingLogo={loadingLogo}
      />
      <AboutVision aboutData={aboutData} loadingAbout={loadingAbout} />
      <div className="medicalServices__loaction container">
        <div className="flex-center">
          <div className="main__title-div">
            <h2 className="main__title">
              {language === "en" ? "Location" : "موقعنا"}
            </h2>
          </div>
        </div>
        <div className="medicalServices__mapImage">
          <img src={aboutData?.imageMap} alt="map" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default About;
