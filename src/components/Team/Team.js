import React from "react";
import { teamData } from "../../utils/data";
import "./Team.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import TeamCard from "./TeamCard";
import { useWindowInner } from "../../hooks/useWindowInner";

function Team() {
    const { isMobile } = useWindowInner();
  return (
    <div className="team container">
      <div className="flex-center mb-20">
        <div className="main__title-div">
          <h2 className="main__title">Meet Our Team</h2>
        </div>
      </div>
      <div className="team__swiper relative px-4">
        <Swiper
          slidesPerView={isMobile ? 1 : 4}
          spaceBetween={60}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {teamData.map((item, index) => (
            <SwiperSlide key={index}>
              <TeamCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Team;
