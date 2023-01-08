import React, { useState } from "react";
import "./GalleryCard.css";
const url_main = "https://el-shrouk-hospital-dashboard.technomasrsystems.com";
function GalleryCard({ item }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`galleryCard text-center transition duration-500 hover:scale-105 `}
    >
      {isHover && (
        <h3 className="GalleryCard__title mb-3">{item.categoryName}</h3>
      )}

      <img
        src={`${url_main}/uploads/media/${item.id}/${item.images}`}
        alt={item.title}
        loading="lazy"
      />
    </div>
  );
}

export default GalleryCard;
