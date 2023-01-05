import React, { useEffect, useState } from "react";
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
const url_main = "https://el-shrouk-hospital-dashboard.technomasrsystems.com";

function Team({ language }) {
  const { isMobile } = useWindowInner();
  const [loading, setLoading] = useState(true);
  const [teamData, setTeamData] = useState([]);
  useEffect(() => {
    fetch(`${url_main}/api/ourTeam`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        lang: language,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setTeamData(data);
        // console.log("weCare", data);
        // setSettings(data.data);
      });
  }, [language]);
  return (
    <div id="team" className="team container">
      <div className="flex-center mb-20">
        <div className="main__title-div">
          <h2 className="main__title">
            {language === "en" ? "Meet Our Team" : "فريق العمل"}
          </h2>
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
              <TeamCard item={item} language={language} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Team;
