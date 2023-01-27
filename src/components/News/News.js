import React, { useState } from "react";
import "./News.css";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";
const url_main = "https://el-shrouk-hospital-dashboard.technomasrsystems.com";
function News({ language, events, loadingEvents }) {
  const [newsHover, setNewsHover] = useState(false);
  return (
    <>
      {loadingEvents ? (
        <Spinner />
      ) : (
        <div className="news">
          <div className="container">
            <div className="flex-center">
              <div className="main__title-div">
                <h2 className="main__title">
                  {language === "en" ? "News & Media" : "وسائل الإعلام"}
                </h2>
              </div>
            </div>
            <div className="news__images">
              <div className="news__images__left">
                <img
                  src={`${url_main}/uploads/news/${events?.news_events[0]?.id}/${events?.news_events[0]?.images}`}
                  alt="news"
                  className="news__image__style"
                />
              </div>
              <div className="news__images__right">
                <div
                  className="news__images__right__top relative"
                  onMouseEnter={() => setNewsHover(true)}
                  onMouseLeave={() => setNewsHover(false)}
                >
                  {" "}
                  <img
                    src={`${url_main}/uploads/news/${events?.news_events[1]?.id}/${events?.news_events[1]?.images}`}
                    alt="news"
                    className="news__image__style"
                  />
                  {newsHover && (
                    <>
                      <div className="eventsNews__main__content absolute bottom-0 z-10 w-full p-2 md:p-4 ">
                        <h3>{events?.news_events[1].title}</h3>
                        <div className="flex justify-between mt-2">
                          <div className="font-bold flex gap-4 text-xs">
                            <span className="">By : Admin</span>
                            <span>{events?.news_events[1].created_at}</span>
                          </div>
                          <Link to={`/news/${events?.news_events[1]?.id}`}>
                            <button className="flex items-center text-xs font-bold gap-2">
                              {language === "en" ? "Read More" : "اقرأ المزيد"}
                              {language === "en" ? (
                                <HiArrowNarrowRight className="text-lg " />
                              ) : (
                                <HiArrowNarrowLeft className="text-lg" />
                              )}
                            </button>
                          </Link>
                        </div>
                      </div>
                      <div className="gradient" />
                    </>
                  )}
                </div>
                <div className="news__images__right__bottom">
                  <div>
                    {" "}
                    <img
                      src={`${url_main}/uploads/news/${events?.news_events[2]?.id}/${events?.news_events[2]?.images}`}
                      alt="news"
                      className="news__image__style"
                    />
                  </div>
                  <div>
                    {" "}
                    <img
                      src={`${url_main}/uploads/news/${events?.news_events[3]?.id}/${events?.news_events[3]?.images}`}
                      alt="news"
                      className="news__image__style"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default News;
