import React from "react";
import news2 from "../../../assets/news/news2.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { newsData } from "../../../utils/data";
import EventsNewsCard from "./EventsNewsCard";
function EventsNews() {
  return (
    <div className="eventsNews container flex space-x-4">
      <div className="eventsNews__main relative overflow-hidden">
        <img src={news2} alt="event" className="image__mainStyle" />
        <div className="eventsNews__main__content absolute bottom-0 z-10 w-full p-4 ">
          <h3>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di…
          </h3>
          <div className="flex justify-between mt-2">
            <div className="font-bold space-x-3 text-xs">
              <span className="">By : Admin</span>
              <span>12/03/2022 12:30 AM</span>
            </div>
            <button className="flex items-center text-xs font-bold">
              Read More <HiArrowNarrowRight className="text-lg ml-2" />{" "}
            </button>
          </div>
        </div>
        <div className="gradient" />
      </div>
      <div className="eventsNews__right">
        {newsData.map((item, index) => (
          <EventsNewsCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default EventsNews;
