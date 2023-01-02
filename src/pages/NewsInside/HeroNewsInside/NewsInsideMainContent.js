import React, { useState } from "react";

function NewsInsideMainContent({ oneNews }) {
  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <div className="newsInsideMainContent container">
      <div className="heroNewsInsideContent__images mt-6">
        <div className="heroNewsInsideContent__images__selected">
          <img
            src={oneNews?.image[selectedImage]}
            alt={oneNews.title}
            className="image__mainStyle"
          />
        </div>
        <div className="heroNewsInsideContent__images__right">
          {oneNews.image.map((item, index) => (
            <img
              key={index}
              src={item}
              alt="news"
              onClick={() => setSelectedImage(index)}
              className={index === selectedImage ? "" : "some-blur"}
            />
          ))}
        </div>
      </div>
      <div className="newsInsideMainContent__allParagraph">
        <div className="flec space-x-4 mt-4">
            <span>By : {oneNews.by}</span>
            <span>{oneNews.date}</span>
            <span></span>
        </div>
        <h4>{oneNews.title}</h4>
        <p>{oneNews.description}</p>
      </div>
    </div>
  );
}

export default NewsInsideMainContent;
