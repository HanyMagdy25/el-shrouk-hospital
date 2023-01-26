import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsGlobe2 } from "react-icons/bs";
import "./Navbar.css";

import { navTitle } from "../../utils/data";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Spinner from "../Spinner/Spinner";

const Navbar = ({ setLanguage, language, logo, siteName, loadingLogo }) => {
  const [click, setClick] = useState(false);
  const [dropLang, setDropLang] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {loadingLogo ? (
            <Spinner />
          ) : (
            <Link to="/" className="navbar-logo">
              <img src={logo} alt="logo" />
              <div>
                <h4>{siteName?.siteTitle_en}</h4>
                <h3>{siteName?.siteTitle_ar}</h3>
              </div>
            </Link>
          )}

          <div className="menu-icon" onClick={handleClick}>
            <span>{click ? <AiOutlineClose /> : <AiOutlineMenu />}</span>
          </div>

          <ul className={click ? "nav-menu active " : "nav-menu"}>
            {navTitle.map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  to={item.path}
                  className={"nav-links "}
                  onClick={() => {
                    handleClick();
                  }}
                >
                  {language === "en" ? item.title : item.titleArabic}
                </NavLink>
              </li>
            ))}
            {/* <div className="flex items-center navbar__lang">
              <BsGlobe2 />
              <select
                onChange={(e) => {
                  handleClick();
                  setLanguage(e.target.value);
                }}
              >
                <option value="en">EN</option>
                <option value="ar">AR</option>
              </select>
            </div> */}
            {/* New Select */}
            <div className="flex items-center gap-1 relative navbar__lang">
              <BsGlobe2 />

              <div
                className="relative  cursor-pointer"
                onClick={() => setDropLang(!dropLang)}
              >
                <h4 className=""> {language === "en" ? "EN" : "AR"}</h4>
                <span className="flex-center absolute langs-arrows">
                  {dropLang ? (
                    <span className="flex-center">
                      <IoMdArrowDropup />
                    </span>
                  ) : (
                    <span className="flex-center">
                      <IoMdArrowDropdown />
                    </span>
                  )}
                </span>
              </div>
              {dropLang && (
                <ul className="dropDown-langs-options">
                  <li
                    className="cursor-pointer optionLang"
                    onClick={() => {
                      setDropLang(false);
                      setLanguage("en");
                    }}
                  >
                    EN
                  </li>
                  <li
                    className="cursor-pointer optionLang"
                    onClick={() => {
                      setDropLang(false);
                      setLanguage("ar");
                    }}
                  >
                    AR
                  </li>
                </ul>
              )}
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
