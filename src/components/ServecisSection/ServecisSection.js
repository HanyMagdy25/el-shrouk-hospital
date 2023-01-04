import React from "react";
// import { servicesData } from "../../utils/data";
import "./ServecisSection.css";
import ServiceCard from "./ServiceCard/ServiceCard";
function ServecisSection({language,servicesData}) {
  return (
    <div className="servecisSection" id="services">
      <div className="container">
        <div className="flex-center">
          <div className="main__title-div">
            <h2 className="main__title">Our Medical Services</h2>
          </div>
        </div>
        <p className="servecisSection__paragraph">
          We provide distinguished medical service in all different branches of
          medicine ,When designing and establishing the hospital, it was taken
          into account to provide the latest electromechanical methods, methods
          and means for designing hospitals according to Egyptian and
          international medical codes.
        </p>
        <div className="servecisSection__cards">
          {servicesData.map((item, index) => (
            <ServiceCard key={index} item={item} language={language}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServecisSection;
