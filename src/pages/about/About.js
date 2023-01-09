import React, { useEffect, useState } from "react";
import HeroAbout from "./HeroAbout/HeroAbout";
import "./About.css";
import AboutVision from "./HeroAbout/AboutVision/AboutVision";
const url_main = "https://el-shrouk-hospital-dashboard.technomasrsystems.com";
function About({ setLanguage, language }) {
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
    <div className="about ">
      <HeroAbout
        setLanguage={setLanguage}
        language={language}
        aboutData={aboutData}
        loadingAbout={loadingAbout}
      />
      <AboutVision aboutData={aboutData} loadingAbout={loadingAbout}/>
    </div>
  );
}

export default About;
