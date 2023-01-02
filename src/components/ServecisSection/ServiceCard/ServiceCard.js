import React from "react";
import "./ServiceCard.css";
import { HiArrowNarrowRight } from "react-icons/hi";
// Dummy Data

function ServiceCard({ item }) {
  return (
    <div className="serviceCard">
      <img src={`${item.icon}`} alt={item.title} />
      <h3 className="serviceCard__title">{item.title}</h3>
      <p className="serviceCard__description">{item.description}</p>
      <button className="serviceCard__btn">
        Read More <HiArrowNarrowRight className="serviceCard__btn__icon" />
      </button>
    </div>
  );
}

export default ServiceCard;
