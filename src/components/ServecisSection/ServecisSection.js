import React from "react";
import Spinner from "../Spinner/Spinner";
// import { servicesData } from "../../utils/data";
import "./ServecisSection.css";
import ServiceCard from "./ServiceCard/ServiceCard";
function ServecisSection({ language, servicesData, loadingServices }) {
  console.log("6666servicesData", servicesData);
  return (
    <>
      {loadingServices ? (
        <Spinner />
      ) : (
        <div className="servecisSection" id="services">
          <div className="container">
            <div className="flex-center">
              <div className="main__title-div">
                <h2 className="main__title">
                  {servicesData.StaticServicesData.ServiceTitle}
                </h2>
              </div>
            </div>
            <p className="servecisSection__paragraph">
              {servicesData.StaticServicesData.ServicesDes}
            </p>
            <div className="servecisSection__cards">
              {servicesData?.Services?.map((item, index) => (
                <ServiceCard key={index} item={item} language={language} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ServecisSection;
