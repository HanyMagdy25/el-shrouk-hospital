import React from "react";
import "./News.css";
import newsImg1 from "../../assets/news/news1.jpg";
import newsImg2 from "../../assets/news/news2.jpg";
import newsImg3 from "../../assets/news/news3.jpg";
import newsImg4 from "../../assets/news/news4.jpg";
function News() {
  return (
    <div className="news">
      <div className="container">
        <div className="flex-center">
          <div className="main__title-div">
            <h2 className="main__title">News & Media</h2>
          </div>
        </div>
        <div className="news__images">
          <div className="news__images__left">
            <img
              src={newsImg1}
              alt="news"
              loading="lazy"
              className="news__image__style"
            />
          </div>
          <div className="news__images__right">
            <div className="news__images__right__top">
              {" "}
              <img
                src={newsImg2}
                alt="news"
                loading="lazy"
                className="news__image__style"
              />
            </div>
            <div className="news__images__right__bottom">
              <div>
                {" "}
                <img
                  src={newsImg3}
                  alt="news"
                  loading="lazy"
                  className="news__image__style"
                />
              </div>
              <div>
                {" "}
                <img
                  src={newsImg4}
                  alt="news"
                  loading="lazy"
                  className="news__image__style"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
