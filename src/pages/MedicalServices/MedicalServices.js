import React, { useEffect, useState } from "react";
import MedicalCard from "./MedicalCard/MedicalCard";
import MedicalCardToRead from "./MedicalCardToRead/MedicalCardToRead";
import "./MedicalServices.css";
import Spinner from "../../components/Spinner/Spinner";
import HeroMedical from "./HeroMedical/HeroMedical";
const url_main = "https://el-shrouk-hospital-dashboard.technomasrsystems.com";

function MedicalServices({
  setLanguage,
  language,
  servicesData,
  logo,
  siteName,
  loadingLogo,
}) {
  const [toggle, setToggle] = useState(1);
  const [equipments, setEquipments] = useState([]);
  const [loadingEquipments, setLoadingEquipments] = useState(true);
  const toggleTap = (index) => {
    setToggle(index);
  };
  // To Open Google Map With lat and lng
  // const lat = "30.089726";
  // const lng = "31.638698";
  // const showInMapClicked = () => {
  //   window.open("https://maps.google.com?q=" + lat + "," + lng);
  // };

  useEffect(() => {
    fetch(`${url_main}/api/equipments`, {
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
        setEquipments(data);
        setLoadingEquipments(false);
      });
  }, [language]);

  return (
    <div className="medicalServices">
      <HeroMedical
        setLanguage={setLanguage}
        language={language}
        servicesData={servicesData}
        toggleTap={toggleTap}
        toggle={toggle}
        logo={logo}
        siteName={siteName}
        loadingLogo={loadingLogo}
      />
      {loadingEquipments ? (
        <Spinner />
      ) : (
        <div className="medicalServices__container mt-10 container px-5 lg:px-0">
          <div className="medicalServices__allCards">
            <div
              className={
                toggle === 1
                  ? "medicalServices__content active"
                  : "medicalServices__content"
              }
            >
              {servicesData?.Services?.map((item, index) => (
                <MedicalCardToRead
                  key={index}
                  item={item}
                  language={language}
                />
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
                {equipments?.equipments?.map((item, index) => (
                  <MedicalCard key={index} item={item} language={language} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MedicalServices;
