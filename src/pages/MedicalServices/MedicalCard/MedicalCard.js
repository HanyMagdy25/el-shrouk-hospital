import React from "react";
import "./MedicalCard.css";
function MedicalCard({ item }) {
  return (
    <div className="medicalCard">
      <div className="medicalCard__img">
        <img src={item.image} alt={item.titlte} />
      </div>
      <div className="medicalCard__content">
        <h2 >{item.title}</h2>
        {item.description.map((i, index) => (
          <ul key={index}>
            <li>{i}</li>
          </ul>
        ))}
      </div>
      <div className="medicalCard__icon">
        <img src={item.icon} alt={item.titlte} />
      </div>
    </div>
  );
}

export default MedicalCard;
