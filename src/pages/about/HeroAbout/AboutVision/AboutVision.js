import React from "react";
import AboutVisionCard from "./AboutVisionCard";
import Spinner from "../../../../components/Spinner/Spinner";

function AboutVision({ aboutData, loadingAbout }) {
  return (
    <>
      {loadingAbout ? (
        <Spinner />
      ) : (
        <div className="aboutVision container px-5 lg:px-0">
          {aboutData?.aboutus?.boxes?.map((item, index) => (
            <AboutVisionCard key={index} item={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default AboutVision;
