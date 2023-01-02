import React, { useState } from "react";
import { equipmentData, servicesData } from "../../utils/data";
import HeroAbout from "../about/HeroAbout/HeroAbout";
import MedicalCard from "./MedicalCard/MedicalCard";
import MedicalCardToRead from "./MedicalCardToRead/MedicalCardToRead";
import map1 from "../../assets/map1.png";
import "./MedicalServices.css";
import ContactUs from "../../components/ContactUs/ContactUs";
function MedicalServices() {
  const [toggle, setToggle] = useState(1);
  const toggleTap = (index) => {
    setToggle(index);
    // console.log("55",toggle)
  };
  // To Open Google Map With lat and lng
  const lat = "30.089726";
  const lng = "31.638698";
  const showInMapClicked = () => {
    window.open("https://maps.google.com?q=" + lat + "," + lng);
  };
  return (
    <div className="medicalServices">
      <HeroAbout />
      <div className="medicalServices__container container">
        <div className="flex-center">
          <div className="main__title-div">
            <h2 className="main__title">Our Medical Services</h2>
          </div>
        </div>
        <p className="medicalServices__paragraph">
          We provide distinguished medical service in all different branches of
          medicine ,When designing and establishing the hospital, it was taken
          into account to provide the latest electromechanical methods, methods
          and means for designing hospitals according to Egyptian and
          international medical codes.
        </p>
        <div className="medicalServices__btns flex-center">
          <button
            className={toggle === 1 ? "btn-fill" : "btn-fill notActive"}
            onClick={() => toggleTap(1)}
          >
            Medical Services
          </button>
          <button
            className={toggle === 2 ? "btn-fill" : "btn-fill notActive"}
            onClick={() => toggleTap(2)}
          >
            Equipment & Units
          </button>
        </div>
        <div className="medicalServices__allCards">
          <div
            className={
              toggle === 1
                ? "medicalServices__content active"
                : "medicalServices__content"
            }
          >
            {servicesData.map((item, index) => (
              <MedicalCardToRead key={index} item={item} />
            ))}
          </div>
          <div
            className={
              toggle === 2
                ? "medicalServices__content active"
                : "medicalServices__content"
            }
          >
            <div className="medicalServices__equipment">
              {equipmentData.map((item, index) => (
                <MedicalCard key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
        <div className="medicalServices__loaction">
          <div className="flex-center">
            <div className="main__title-div">
              <h2 className="main__title">Our Medical Services</h2>
            </div>
          </div>
          <div className="medicalServices__mapImage">
            <img onClick={showInMapClicked} src={map1} alt="map" />
          </div>
        </div>
      </div>
      <ContactUs/>
    </div>
  );
}

export default MedicalServices;
