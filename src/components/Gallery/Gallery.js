import { useEffect, useState } from "react";
// import { galleryData, galleryDataSwiper } from "../../utils/data";
import "./Gallery.css";
import GalleryCard from "./GalleryCard/GalleryCard";
import GallerySwiper from "./GallerySwiper/GallerySwiper";
const url_main = "https://el-shrouk-hospital-dashboard.technomasrsystems.com";
function Gallery({ language, galleryContent }) {
  const [galleryBtns, setGalleryBtns] = useState([]);
  const [toggle, setToggle] = useState(1);
  useEffect(() => {
    fetch(`${url_main}/api/gallaryMedia`, {
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
        setGalleryBtns(data);
        // console.log("galleryBtns", data);
      });
  }, [language]);
  const toggleTap = (index) => {
    setToggle(index);
  };
  return (
    <div className="gallery container mt-20">
      <div className="flex-center">
        <div className="main__title-div">
          <h2 className="main__title">{galleryContent?.gallaryMediaTitle}</h2>
        </div>
      </div>
      <p className="gallery__paragraph mt-10 text-center">
        {galleryContent?.gallaryMediaDes}
      </p>
      <div className="flex gallery__hover__div px-5 lg:px-0">
        {galleryBtns?.slice(0, 8)?.map((item, index) => (
          <GalleryCard key={index} item={item} />
        ))}
      </div>

      <div className="gallery__btns flex mt-24 flex-wrap px-5 lg:px-0 gap-3">
        {galleryBtns?.map((item, index) => (
          <button
            key={index}
            onClick={() => toggleTap(item.id)}
            className={toggle === item.id ? "btn-fill" : "btn-fill notActive"}
          >
            {item.categoryName}
          </button>
        ))}
      </div>
      <div className="px-5 lg:px-0">
        <GallerySwiper toggle={toggle} language={language} />
      </div>
    </div>
  );
}

export default Gallery;
