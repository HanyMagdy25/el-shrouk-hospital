import React, { useState } from "react";
import "./MedicalCardToRead.css";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
const url_main = "https://el-shrouk-hospital-dashboard.technomasrsystems.com";

const ReadMore = ({ children,language}) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      <p className="text">{isReadMore ? text.slice(0, 200) : text}</p>

      {isReadMore ? (
        <button onClick={toggleReadMore} className="medicalCardToRead__read">
          {language === "en" ? "Read More" : "اقرأ المزيد"}
          <BsArrowDownShort />
        </button>
      ) : (
        <button onClick={toggleReadMore} className="medicalCardToRead__read">
          {language === "en" ? "Read Less" : "اقرأ أقل"}
          <BsArrowUpShort />
        </button>
      )}
    </>
  );
};

function MedicalCardToRead({ item , language }) {
  return (
    <div className="medicalCardToRead">
      <div className="medicalCardToRead__title">
        <img
          src={`${url_main}/uploads/services/${item.id}/${item.icon}`}
          alt={item.title}
        />
        <h3>{item.title}</h3>
      </div>
      <div className="medicalCardToRead__description">
        <ReadMore language={language}>{item.description}</ReadMore>
      </div>
    </div>
  );
}

export default MedicalCardToRead;
