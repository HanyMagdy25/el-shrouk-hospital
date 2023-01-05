import React from "react";
import AboutVisionCard from "./AboutVisionCard";
import vision1 from "../../../../assets/vision/vision1.png";
import vision2 from "../../../../assets/vision/vision2.png";
import vision3 from "../../../../assets/vision/vision3.png";

const visionData = [
  {
    title: "Our Values",
    image: vision1,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diaorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diaorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia",
  },
  {
    title: "Our Mission",
    image: vision2,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diaorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diaorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia",
  },
  {
    title: "Our Vision",
    image: vision3,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diaorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diaorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia",
  },
];
function AboutVision() {
  return (
    <div className="aboutVision container">
      {visionData.map((item, index) => (
        <AboutVisionCard key={index} item={item} />
      ))}
    </div>
  );
}

export default AboutVision;
