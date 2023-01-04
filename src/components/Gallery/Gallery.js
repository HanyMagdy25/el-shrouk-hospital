import { galleryData, galleryDataSwiper } from "../../utils/data";
import "./Gallery.css";
import GalleryCard from "./GalleryCard/GalleryCard";
import GallerySwiper from "./GallerySwiper/GallerySwiper";
function Gallery() {
  return (
    <div className="gallery container mt-20">
      <div className="flex-center">
        <div className="main__title-div">
          <h2 className="main__title">Gallery & Media</h2>
        </div>
      </div>
      <p className="gallery__paragraph mt-10 text-center">
        Al Shorouk Specialised Hospital (Swiss) is one of the newly established
        medical facilities in the Arab Republic of Egypt, we belongs to Swiss
        Hospitals Management Company, which aspires to gain the confidence of
        all its clients, including individuals.
      </p>
      <div className="flex gallery__hover__div px-5 lg:px-0" >
        {galleryData.map((item, index) => (
          <GalleryCard key={index} item={item} />
        ))}
      </div>

      <div className="gallery__btns flex mt-24 flex-wrap">
        <button className="btn-fill">Medical Services</button>
        <button className="btn-fill notActive">Medical Services</button>
        <button className="btn-fill notActive">cosmetic & laser unit</button>
        <button className="btn-fill notActive">Operating Rooms</button>
        <button className="btn-fill notActive">NICU</button>
        <button className="btn-fill notActive">Building</button>
        <button className="btn-fill notActive">Emergency Department</button>
        <button className="btn-fill notActive">physiotherapy</button>
        <button className="btn-fill notActive">Dental unit</button>
        <button className="btn-fill notActive">Neurology unit</button>
      </div>
      <div className="px-5 lg:px-0">
        <GallerySwiper />
      </div>
    </div>
  );
}

export default Gallery;
