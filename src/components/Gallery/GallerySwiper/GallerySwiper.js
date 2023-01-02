import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { galleryDataSwiper } from "../../../utils/data";

function GallerySwiper() {
    const [btnIndex, setBtnIndex] = useState(1)
    const oneSwiper = galleryDataSwiper.find((a) => a.id === parseInt(btnIndex));
//   const allImages = galleryDataSwiper.map((a) => {
    
//     return a.image;
//   });
  console.log("oneSwiper", oneSwiper);
  return (
    <div>
      <div>Big Image</div>
      <div className="gallerySwiper__div">
        <Swiper
          slidesPerView={8}
          spaceBetween={12}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper initi"
        >
          {oneSwiper.image.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item} alt="antique" className="firstSwiper-img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default GallerySwiper;
