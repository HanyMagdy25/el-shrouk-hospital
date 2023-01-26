import React, { useState } from "react";
import Spinner from "../../Spinner/Spinner";
import hero1 from "../../../assets/hero/hero1.png"
import hero2 from "../../../assets/hero/hero2.png"
import hero3 from "../../../assets/hero/hero3.png"
function HeroContent({ mainPageHero, language, loadingSettings }) {
  const [soon, setSoon] = useState(false);
  return (
    <>
      {loadingSettings ? (
        <Spinner />
      ) : (
        <div className="heroContent">
          <div className="heroContent__left">
            <div className="heroContent__left__div">
              <h1 className="heroContent__left__title">
                {mainPageHero.mainPageTitle}
              </h1>
              <p className="heroContent__left__paragraph">
                {mainPageHero.mainPageDesc}
              </p>
              <div className="heroContent__left__btns">
                <button onClick={() => setSoon(true)} className="btn-fill">
                  {language === "en" ? "Get appointment" : "احجز موعد"}
                </button>
                {/* <button className="btn-outline">Specialists</button> */}
                {soon && (
                  <p className="text-center mt-2">
                    {language === "en" ? "Available soon" : "سنأتى قريبا"}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="heroContent__right z-0">
            <div className="relative flex">

            <img src={mainPageHero.mainPageImage} alt="doctor" className="main-doctor" />
            <img src={hero1} alt="hero1" className="hero1"/>
            <img src={hero2} alt="hero2" className="hero2 -z-10"/>
            <img src={hero3} alt="hero3" className="hero3 -z-10"/>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HeroContent;
