import "./Footer.css";
// import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
function Footer({ contact_data, social, language, logo, siteName }) {
  return (
    <footer>
      <div className="container">
        <div className="footer_container ">
          <div className="footer__first">
            <div className="footer__first__image flex-center">
              <img src={logo} alt="logo" loading="lazy" />
            </div>
            <div className="footer__first__content pt-3">
              <h4>{siteName.siteTitle_en}</h4>
              <h3>{siteName.siteTitle_ar}</h3>
              <p>{contact_data.address}</p>
              <h5>
                {language === "en" ? "Hotline" : "الخط الساخن"} :
                <span>
                  <a
                    href={`tel:${contact_data.hotLine}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {""} {contact_data.hotLine}
                  </a>{" "}
                </span>{" "}
              </h5>
              <h5>{contact_data.email}</h5>
            </div>
          </div>
          <div className="footer__second">
            <Link className="mt-2" to="/about">{language === "en" ? "About" : "من نحن"}</Link>
            <Link to="/services">
              {language === "en" ? "Our Services" : "خدماتنا"}
            </Link>
            <Link to="/contact">
              {language === "en" ? "Contact Us" : "تواصل معنا"}
            </Link>
          </div>
          <div className="footer__second mr-28">
            <a
              href={`https://wa.me/${contact_data.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              <span>{language === "en" ? "WhatsApp" : "واتساب"}</span>
              <span className="flex-center gap-1">
                <IoLogoWhatsapp /> {contact_data.whatsapp}
              </span>
            </a>
            <a href={social.facebook} target="_blank" rel="noreferrer">
              {language === "en" ? "Facebook" : "فيسبوك"}
            </a>
            <a href={social.linkedin} target="_blank" rel="noreferrer">
              {language === "en" ? "Linkedin" : "لينكدان"}
            </a>
            <a href={social.instagram} target="_blank" rel="noreferrer">
              {language === "en" ? "Instagram" : "انستجرام"}
            </a>
            <a href={social.youtube} target="_blank" rel="noreferrer">
              {language === "en" ? "Youtube" : "يوتيوب"}
            </a>
          </div>
        </div>
        <div className="flex-center copyRight">
          <p>
            {language === "en"
              ? `${
                  new Date().getFullYear()
                } “shorouk specialised hospital” all rights reserved`
              : `كافة الحقوق محفوظة لـ مستشفى الشروق التخصصى  © ${
                  new Date().getFullYear()
                }`}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
