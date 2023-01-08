import React, { useEffect, useState } from "react";
import "./WeCare.css";

const url_main = "https://el-shrouk-hospital-dashboard.technomasrsystems.com";

function WeCare({ language }) {
  const [loading, setLoading] = useState(true);
  const [weCareData, setWecareData] = useState([]);
  useEffect(() => {
    fetch(`${url_main}/api/weCares`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        lang: language,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setWecareData(data);
        console.log("weCare", data);
        // setSettings(data.data);
      });
  }, [language]);
  
  return (
    <div className="weCare">
      <div className="container weCare__container">
        <div className="weCare__left">
          <img
            src={weCareData?.StaticWeCareData?.weCareImage}
            alt="weCare"
            loading="lazy"
          />
          <div className="weCare__left__title">
            <h2>WE CARE</h2>
          </div>
        </div>
        <div className="weCare__right">
          <h2 className="weCare__right__title">
            {weCareData?.StaticWeCareData?.weCareTitle}
            {/* What makes <span>SHOUROK</span> Specialised Hospital Unique ? */}
          </h2>
          <div className="weCare__right__allCards">
            {weCareData?.staticIcons?.map((item, index) => (
              <div key={index} className="weCare__right__card">
                <div className="weCare__right__card__img ">
                  <div>
                    <img
                      src={`${url_main}/uploads/weCares/${item.id}/${item.icon}`}
                      alt={item.title}
                    />
                  </div>
                </div>
                <div className="weCare__right__card__content">
                  <h4>{item.title}</h4>
                  {/* <div
                    className=""
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  /> */}
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
