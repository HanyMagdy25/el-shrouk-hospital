import React from "react";
import vision4 from "../../../../assets/vision/vision4.png";
import vision5 from "../../../../assets/vision/vision5.png";

function AboutVisionCard({item}) {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <div className="aboutVisionCard">
      <div className="aboutVisionCard__div__image">
        <div className="aboutVisionCard__div__image__inside flex-center">
          <img
            src={item.image}
            alt="icon"
            loading="lazy"
            className="aboutVisionCard__div__image__inside__mainImage"
          />
          <img
            src={vision5}
            alt="icon"
            loading="lazy"
            className="aboutVisionCard__div__image__inside__iconImageTop"
          />
          <img
            src={vision4}
            alt="icon"
            loading="lazy"
            className="aboutVisionCard__div__image__inside__iconImageBottom"
          />
        </div>
      </div>
      <div className="aboutVisionCard__div__content">
        <h3>{item.title}</h3>
        <p>
          {truncate(item.description, 150)}
        </p>
      </div>
    </div>
  );
}

export default AboutVisionCard;
