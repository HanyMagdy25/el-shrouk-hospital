import React from "react";
import "./ContactUs.css";
import map2 from "../../assets/map2.png";
import facebookIcon from "../../assets/facebook.png";
import linkedinIcon from "../../assets/linkedin.png";
function ContactUs() {
  // To Open Google Map With lat and lng
  const lat = "30.089726";
  const lng = "31.638698";
  const showInMapClicked = () => {
    window.open("https://maps.google.com?q=" + lat + "," + lng);
  };
  return (
    <div className="contactUs mb-20">
      <div className="container">
        <div className="flex-center mb-14">
          <div className="main__title-div">
            <h2 className="main__title">Contact Us</h2>
          </div>
        </div>
        <div className="contactUs__image flex ">
          <div className="contactUs__image__content rounded-xl bg-white p-6 ">
            <h3>Contact</h3>
            <h4>
              Hotline : <span>17121</span>
            </h4>
            <h4>
              Email :<span>tayseer@elshroukhospital.com</span>
            </h4>
            <h4>
              WhatsApp :<span>01234567890</span>
            </h4>
            <h3>Location</h3>
            <p>
              Buiding no.234 north teseen 5th settlements New Cairo، Cairo
              Governorate 11835
            </p>
            <h3>Social Media</h3>
            <div className="flex space-x-1">
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebookIcon} alt="" />
              </a>
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedinIcon} alt="" />
              </a>
            </div>
          </div>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d109436.06621575782!2d31.362252800000004!3d31.0018048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1672653802035!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          <img src={map2} alt="map" onClick={showInMapClicked} className="rounded-xl py-3" />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
