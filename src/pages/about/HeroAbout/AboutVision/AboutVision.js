import React from "react";
import AboutVisionCard from "./AboutVisionCard";
import vision1 from "../../../../assets/vision/vision1.png";
import vision2 from "../../../../assets/vision/vision2.png";
import vision3 from "../../../../assets/vision/vision3.png";

const visionData = [
  { title: "", image: vision1 },
  { title: "", image: vision2 },
  { title: "", image: vision3 },
];
function AboutVision() {
  return (
    <div className="aboutVision container">
      {visionData.map((item, index) => (
        <AboutVisionCard key={index} item={item}/>
      ))}
    </div>
  );
}

export default AboutVision;
