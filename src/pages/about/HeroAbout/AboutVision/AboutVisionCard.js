import React from "react";
import vision4 from "../../../../assets/vision/vision4.png";
import vision5 from "../../../../assets/vision/vision5.png";

function AboutVisionCard({item}) {
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
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy
        </p>
      </div>
    </div>
  );
}

export default AboutVisionCard;
