import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { useWindowInner } from "../../../hooks/useWindowInner";
import Spinner from "../../Spinner/Spinner";
const url_main = "https://el-shrouk-hospital-dashboard.technomasrsystems.com";
function GallerySwiper({ toggle, language }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [galleryImgs, setGalleryImgs] = useState([]);
  const [loadingGalleryImgs, setLoadingGalleryImgs] = useState(true);
  const { isMobile } = useWindowInner();

  useEffect(() => {
    fetch(`${url_main}/api/media/${toggle}`, {
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
        setGalleryImgs(data);
        setLoadingGalleryImgs(false);
      });
  }, [language, toggle]);
  return (
    <div className="mt-5">
      {loadingGalleryImgs ? (
        <Spinner />
      ) : (
        <>
          <div className="gallerySwiper__bigImage">
            <img
              src={`${url_main}/uploads/media/${toggle}/${galleryImgs[selectedImage]}`}
              alt="galleryImage"
              className="image__mainStyle"
            />
          </div>
          <div className="gallerySwiper__div mt-5 mb-20">
            <Swiper
              slidesPerView={isMobile ? 3 : 8}
              spaceBetween={15}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper initi"
            >
              {galleryImgs?.map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`${url_main}/uploads/media/${toggle}/${item}`}
                    alt="event"
                    onClick={() => setSelectedImage(index)}
                    className={
                      index === selectedImage ? "" : "cursor-pointer some-blur"
                    }
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      )}
    </div>
  );
}

export default GallerySwiper;
