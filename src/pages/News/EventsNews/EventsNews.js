import React from "react";
import news2 from "../../../assets/news/news2.jpg";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import { newsData } from "../../../utils/data";
import EventsNewsCard from "./EventsNewsCard";
function EventsNews({ language }) {
  return (
    <div className="eventsNews container flex px-5 lg:px-0">
      <div className="eventsNews__main relative overflow-hidden ">
        <img src={news2} alt="event" className="image__mainStyle" />
        <div className="eventsNews__main__content absolute bottom-0 z-10 w-full p-4 ">
          <h3>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di…
          </h3>
          <div className="flex justify-between mt-2">
            <div className="font-bold flex gap-4 text-xs">
              <span className="">By : Admin</span>
              <span>12/03/2022 12:30 AM</span>
            </div>
            <button className="flex items-center text-xs font-bold gap-2">
              Read More
              {language === "en" ? (
                <HiArrowNarrowRight className="text-lg " />
              ) : (
                <HiArrowNarrowLeft className="text-lg" />
              )}
            </button>
          </div>
        </div>
        <div className="gradient" />
      </div>
      <div className="eventsNews__right">
        {newsData.map((item, index) => (
          <EventsNewsCard key={index} item={item} language={language} />
        ))}
      </div>
    </div>
  );
}

export default EventsNews;
