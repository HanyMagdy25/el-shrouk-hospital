import React from "react";
import "./ServiceCard.css";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
// Dummy Data
const url_main = "https://el-shrouk-hospital-dashboard.technomasrsystems.com";
function ServiceCard({ item, language }) {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <div className="serviceCard">
      <img
        src={`${url_main}/uploads/services/${item.id}/${item.icon}`}
        alt={item.title}
      />
      <h3 className="serviceCard__title">{item.title}</h3>
      {/* <p className="serviceCard__description">{item.description}</p> */}
      <div
        className="serviceCard__description"
        dangerouslySetInnerHTML={{ __html: truncate(item.description, 110) }}
      />
      <button className="serviceCard__btn">
        Read More{" "}
        {language === "en" ? (
          <HiArrowNarrowRight className="serviceCard__btn__icon" />
        ) : (
          <HiArrowNarrowLeft className="serviceCard__btn__icon" />
        )}
      </button>
    </div>
  );
}

export default ServiceCard;
