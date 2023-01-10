import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsGlobe2 } from "react-icons/bs";
import "./Navbar.css";

import { navTitle } from "../../utils/data";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Spinner from "../Spinner/Spinner";

const Navbar = ({ setLanguage, language, logo, siteName, loadingLogo }) => {
  const [click, setClick] = useState(false);

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
            <div className="flex items-center navbar__lang">
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
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
