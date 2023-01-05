import React, { useState } from "react";
import "./ContactUs.css";
import facebookIcon from "../../assets/facebook.png";
import linkedinIcon from "../../assets/linkedin.png";
import instaIcon from "../../assets/Insta.png";
import youtubeIcon from "../../assets/youtube.png";
function ContactUs({ contact_data, language }) {
  console.log("contact_data", contact_data);
  const [whatsapp, setWhatsapp] = useState("01112994482");
  const [phone, setPhone] = useState("01112994482");
  return (
    <div className="contactUs mb-20">
      <div className="container">
        <div className="flex-center mb-14">
          <div className="main__title-div">
            <h2 className="main__title">
              {language === "en" ? "Contact Us" : "تواصل معنا"}
            </h2>
          </div>
        </div>
        <div className="contactUs__image flex ">
          <div className="contactUs__image__content rounded-3xl bg-white p-6 ">
            <h3>
            {language === "en" ? "Contact" : "التواصل"}
            </h3>
            <h4 className="flex items-center gap-1">
              {language === "en" ? "Hotline" : "الخط الساخن"} :
              <span className="contactUs__phone">
                <a href={`tel:${phone}`} target="_blank" rel="noreferrer">
                  {contact_data.hotLine}
                </a>
              </span>
            </h4>
            <h4 className="flex items-center gap-1">
              {language === "en" ? "Email" : "البريد الالكترونى"} :
              <span>{contact_data.email}</span>
            </h4>
            <h4 className="flex items-center gap-1">
              {language === "en" ? "WhatsApp" : "واتساب"} :
              <span>
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {contact_data.whatsapp}
                </a>
              </span>
            </h4>
            <h3>{language === "en" ? "Location" : "العنوان"}</h3>
            <p>{contact_data.address}</p>
            <h3 className="mt-2">{language === "en" ? "Social Media" : " التواصل الاجتماعى"}</h3>
            <div className="flex space-x-1">
              <a href={contact_data.facebook} target="_blank" rel="noreferrer">
                <img src={facebookIcon} alt="facebookIcon" />
              </a>
              <a href={contact_data.linkedin} target="_blank" rel="noreferrer">
                <img src={linkedinIcon} alt="linkedinIcon" />
              </a>
              <a href={contact_data.instagram} target="_blank" rel="noreferrer">
                <img src={instaIcon} alt="instaIcon" />
              </a>
              <a href={contact_data.youtube} target="_blank" rel="noreferrer">
                <img src={youtubeIcon} alt="youtubeIcon" />
              </a>
            </div>
          </div>
          <div className="contactUs__mapGoogle  py-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d109436.06621575782!2d31.362252800000004!3d31.0018048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1672653802035!5m2!1sen!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="el-shrouk-hospital"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
