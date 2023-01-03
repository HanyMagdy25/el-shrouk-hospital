import React, { useState } from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
function Footer() {
  const [whatsapp, setWhatsapp] = useState("01112994482");
  const [phone, setPhone] = useState("01112994482");
  return (
    <footer>
      <div className="container">
        <div className="footer_container ">
          <div className="footer__first">
            <div className="footer__first__image">
              <img src={logo} alt="logo" loading="lazy" />
            </div>
            <div className="footer__first__content">
              <h4>SHOROUK SPECIALISED HOSPITAL</h4>
              <h3>مستشفى الشروق التخصصي</h3>
              <p>
                Buiding no.234 north teseen 5th settlements New Cairo، Cairo
                Governorate 11835
              </p>
              <h5>
                Hotline :{" "}
                <span>
                  <a href={`tel:${phone}`} target="_blank" rel="noreferrer">
                    17121
                  </a>{" "}
                </span>{" "}
              </h5>
              <h5>ahmed.hussein@ibnsina-pharma.com</h5>
            </div>
          </div>
          <div className="footer__second">
            <Link to="/about">About</Link>
            <Link to="/services">Our Services</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="footer__second mr-28">
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              <span>WhatsApp</span>
              <span className="flex-center">
                <IoLogoWhatsapp /> 01234567890
              </span>
            </a>
            <a href="https://www.google.com/">Facebook</a>
            <a href="https://www.google.com/">linkedin</a>
          </div>
        </div>
        <div className="flex-center copyRight">
          <p>2022 “shorouk specialised hospital” all rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
