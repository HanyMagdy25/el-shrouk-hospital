import { galleryData } from "../../utils/data";
import "./Gallery.css";
import GalleryCard from "./GalleryCard/GalleryCard";
function Gallery() {
  return (
    <div className="gallery container mt-12">
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
      <div className="flex gallery__hover__div">
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
    </div>
  );
}

export default Gallery;