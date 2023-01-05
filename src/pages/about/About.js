import React from "react";
import HeroAbout from "./HeroAbout/HeroAbout";
import "./About.css";
import AboutVision from "./HeroAbout/AboutVision/AboutVision";
function About({ setLanguage ,language }) {
  return (
    <div className="about ">
      <HeroAbout setLanguage={setLanguage} language={language} />
      <AboutVision />
    </div>
  );
}

export default About;
