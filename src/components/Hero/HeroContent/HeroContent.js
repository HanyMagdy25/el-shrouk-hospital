import React, { useState } from "react";
import drImg2 from "../../../assets/hero2.png";
function HeroContent() {
  const [soon, setSoon] = useState(false);
  return (
    <div className="heroContent">
      <div className="heroContent__left">
        <div className="heroContent__left__div">
          <h1 className="heroContent__left__title">
            TITLE WILL BE HERE AS SLOGAN FOR OUR HOSPITAL HERE
          </h1>
          <p className="heroContent__left__paragraph">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren.
          </p>
          <div className="heroContent__left__btns">
            <button onClick={() => setSoon(true)} className="btn-fill">
              Get appointment
            </button>
            {/* <button className="btn-outline">Specialists</button> */}
            {soon && <p className="text-center">Available soon</p>}
          </div>
        </div>
      </div>
      <div className="heroContent__right">
        <img src={drImg2} alt="doctor" />
      </div>
    </div>
  );
}

export default HeroContent;
