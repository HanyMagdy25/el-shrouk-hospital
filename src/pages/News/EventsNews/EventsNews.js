import React from "react";
// import news2 from "../../../assets/news/news2.jpg";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
// import { newsData } from "../../../utils/data";
import EventsNewsCard from "./EventsNewsCard";
import { Link } from "react-router-dom";
import Spinner from "../../../components/Spinner/Spinner";
const url_main = "https://el-shrouk-hospital-dashboard.technomasrsystems.com";
function EventsNews({ language, events, loadingEvents }) {
  // console.log("events?.news_events", events?.news_events);
  return (
    <>
      {loadingEvents ? (
        <Spinner />
      ) : (
        <div className="eventsNews container flex px-5 lg:px-0">
          <div className="eventsNews__main relative overflow-hidden ">
            <img
              src={`${url_main}/uploads/news/${events?.news_events[0]?.id}/${events?.news_events[0]?.images}`}
              alt="event"
              className="image__mainStyle"
            />
            <div className="eventsNews__main__content absolute bottom-0 z-10 w-full p-2 md:p-4 ">
              <h3>{events?.news_events[0]?.title}</h3>
              <div className="flex justify-between mt-2">
                <div className="font-bold flex gap-4 text-xs">
                  <span>By : Admin</span>
                  <span>{events?.news_events[0]?.created_at}</span>
                </div>
                <Link to={`/news/${events?.news_events[0]?.id}`}>
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
          </div>
          <div className="eventsNews__right">
            {events?.news_events?.map((item, index) => (
              <EventsNewsCard key={index} item={item} language={language} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default EventsNews;
