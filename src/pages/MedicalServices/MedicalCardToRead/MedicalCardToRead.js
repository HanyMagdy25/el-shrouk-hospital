import React, { useState } from "react";
import "./MedicalCardToRead.css";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
const ReadMore = ({ children }) => {
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
          Read More <BsArrowDownShort />
        </button>
      ) : (
        <button onClick={toggleReadMore} className="medicalCardToRead__read">
          Read Less <BsArrowUpShort />
        </button>
      )}
    </>
  );
};

function MedicalCardToRead({ item }) {
  return (
    <div className="medicalCardToRead">
      <div className="medicalCardToRead__title">
        <img src={item.icon} alt={item.title} />
        <h3>{item.title}</h3>
      </div>
      <div className="medicalCardToRead__description">
        <ReadMore>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet
        </ReadMore>
      </div>
    </div>
  );
}

export default MedicalCardToRead;
