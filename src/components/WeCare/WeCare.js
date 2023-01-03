import React from "react";
import "./WeCare.css";
import weCareImage from "../../assets/wecare.png";
import { weCareData } from "../../utils/data";
function WeCare() {
  return (
    <div className="weCare">
      <div className="container weCare__container">
        <div className="weCare__left">
          <img src={weCareImage} alt="weCare" loading="lazy" />
          <div className="weCare__left__title">
            <h2>WE CARE</h2>
          </div>
        </div>
        <div className="weCare__right">
          <h2 className="weCare__right__title">
            What makes <span>SHOUROK</span> Specialised Hospital Unique ?
          </h2>
          <div className="weCare__right__allCards">
            {weCareData.map((item, index) => (
              <div key={index} className="weCare__right__card">
                <div className="weCare__right__card__img ">
                  <div>
                    <img src={item.icon} alt={item.title} />
                  </div>
                </div>
                <div className="weCare__right__card__content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeCare;
