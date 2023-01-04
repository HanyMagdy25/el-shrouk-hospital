import React from "react";
import HeroAbout from "./HeroAbout/HeroAbout";
import "./About.css";
import AboutVision from "./HeroAbout/AboutVision/AboutVision";
import ContactUs from "../../components/ContactUs/ContactUs";
function About({ setLanguage }) {
  return (
    <div className="about ">
      <HeroAbout setLanguage={setLanguage} />
      <AboutVision />
      <ContactUs/>
    </div>
  );
}

export default About;
