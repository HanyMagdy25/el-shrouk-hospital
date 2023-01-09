import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../../../components/Spinner/Spinner";

function HeroAboutContent({ language, aboutData, loadingAbout }) {
  return (
    <>
      {loadingAbout ? (
        <Spinner />
      ) : (
        <div className="flex-center flex-column heroAboutContent px-5 lg:px-0">
          <div className="flex-center">
            <div className="main__title-div">
              <h2 className="main__title">
                {language === "en" ? "About us" : "من نحن"}
              </h2>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: aboutData?.Description }} />
          <Link to="/team">
            <button className="btn-fill">
              {language === "en" ? "Meet Our Team" : "تعرف على فريقنا"}
            </button>
          </Link>
        </div>
      )}
    </>
  );
}

export default HeroAboutContent;
