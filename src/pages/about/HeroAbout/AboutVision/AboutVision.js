import React from "react";
import AboutVisionCard from "./AboutVisionCard";
import Spinner from "../../../../components/Spinner/Spinner";

function AboutVision({ aboutData, loadingAbout }) {
  return (
    <>
      {loadingAbout ? (
        <Spinner />
      ) : (
        <div className="aboutVision container">
          {aboutData?.boxes?.map((item, index) => (
            <AboutVisionCard key={index} item={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default AboutVision;
