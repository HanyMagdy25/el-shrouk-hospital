import React from "react";
import { newsData } from "../../../utils/data";
import EventsNewsCard from "../../News/EventsNews/EventsNewsCard";
function RelatedNews() {
  return (
    <div className="mt-20 mb-24">
      <div className="container">
        <div className="flex-center mb-14">
          <div className="main__title-div">
            <h2 className="main__title">Related News</h2>
          </div>
        </div>
        <div className="flex space-x-3">
          {newsData.slice(0, 3).map((item, index) => (
            <EventsNewsCard item={item} key={index} type="related"/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RelatedNews;
