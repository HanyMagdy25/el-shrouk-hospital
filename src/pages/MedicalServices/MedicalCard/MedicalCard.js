import React from "react";
import "./MedicalCard.css";
const url_main = "https://el-shrouk-hospital-dashboard.technomasrsystems.com";
function MedicalCard({ item, language }) {
  return (
    <div className={`medicalCard ${language === "ar" && "medicalCard__ar"}`}>
      <div className="medicalCard__img">
        <img
          src={`${url_main}/uploads/equipments/images/${item?.id}/${item?.image}`}
          alt={item.titlte}
        />
      </div>
      <div className="medicalCard__content">
        <h2>{item?.title}</h2>
        {/* <p>{item?.description}</p> */}
        <div
          className=""
          dangerouslySetInnerHTML={{ __html: item.description }}
        />
        {/* {item?.description.map((i, index) => (
          <ul key={index}>
            <li>{i}</li>
          </ul>
        ))} */}
      </div>
      <div className="medicalCard__icon">
        <img
          src={`${url_main}/uploads/equipments/icons/${item?.id}/${item?.icon}`}
          alt={item?.titlte}
        />
      </div>
    </div>
  );
}

export default MedicalCard;
