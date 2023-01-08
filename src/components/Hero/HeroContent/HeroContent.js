import React, { useState } from "react";
import Spinner from "../../Spinner/Spinner";
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
          <div className="heroContent__right">
            <img src={mainPageHero.mainPageImage} alt="doctor" />
          </div>
        </div>
      )}
    </>
  );
}

export default HeroContent;
