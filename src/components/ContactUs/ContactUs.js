import "./ContactUs.css";
import facebookIcon from "../../assets/facebook.png";
import linkedinIcon from "../../assets/linkedin.png";
import instaIcon from "../../assets/Insta.png";
import youtubeIcon from "../../assets/youtube.png";
import Spinner from "../Spinner/Spinner";
function ContactUs({ contact_data, language, loadingSettings ,social}) {
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
        {loadingSettings ? (
          <Spinner />
        ) : (
          <div className="contactUs__image flex">
            <div className="contactUs__image__content rounded-3xl bg-white p-6 ">
              <h3>{language === "en" ? "Contact" : "التواصل"}</h3>
              <h4 className="flex items-center gap-1">
                {language === "en" ? "Hotline" : "الخط الساخن"} :
                <span className="contactUs__phone">
                  <a
                    href={`tel:${contact_data.hotLine}`}
                    target="_blank"
                    rel="noreferrer"
                  >
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
                    href={`https://wa.me/${contact_data.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {contact_data.whatsapp}
                  </a>
                </span>
              </h4>
              <h3>{language === "en" ? "Location" : "العنوان"}</h3>
              <p>{contact_data.address}</p>
              <h3 className="mt-2">
                {language === "en" ? "Social Media" : " التواصل الاجتماعى"}
              </h3>
              <div className="flex space-x-1">
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={facebookIcon} alt="facebookIcon" />
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedinIcon} alt="linkedinIcon" />
                </a>
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={instaIcon} alt="instaIcon" />
                </a>
                <a href={social.youtube} target="_blank" rel="noreferrer">
                  <img src={youtubeIcon} alt="youtubeIcon" />
                </a>
              </div>
            </div>
            <div className="contactUs__mapGoogle  py-3">
              <iframe
                src={contact_data?.map}
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
        )}
      </div>
    </div>
  );
}

export default ContactUs;
