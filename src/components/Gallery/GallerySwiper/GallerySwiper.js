import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { galleryDataSwiper } from "../../../utils/data";
import { useWindowInner } from "../../../hooks/useWindowInner";

function GallerySwiper() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [btnIndex, setBtnIndex] = useState(1);
  const oneSwiper = galleryDataSwiper.find((a) => a.id === parseInt(btnIndex));
  //   const allImages = galleryDataSwiper.map((a) => {

  //     return a.image;
  //   });
  // console.log("oneSwiper", oneSwiper);
  const { isMobile } = useWindowInner();
  return (
    <div className="mt-5">
      <div className="gallerySwiper__bigImage">
        <img
          src={oneSwiper?.image[selectedImage]}
          alt={oneSwiper.title}
          className="image__mainStyle"
        />
      </div>
      <div className="gallerySwiper__div mt-5 mb-20">
        <Swiper
          slidesPerView={isMobile ? 3 : 8}
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
              <img
                src={item}
                alt="event"
                onClick={() => setSelectedImage(index)}
                // className="firstSwiper-img"
                className={index === selectedImage ? "" : "cursor-pointer some-blur"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default GallerySwiper;
