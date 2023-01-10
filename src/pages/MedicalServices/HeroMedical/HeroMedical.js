import React from "react";
import Navbar from "../../../components/Navbar/Navbar";

function HeroMedical({
  setLanguage,
  language,
  servicesData,
  toggleTap,
  toggle,
  logo,
  siteName,
  loadingLogo,
}) {
  return (
    <div className="hero-section heroMedical">
      <div className="container">
        <Navbar
          setLanguage={setLanguage}
          language={language}
          logo={logo}
          siteName={siteName}
          loadingLogo={loadingLogo}
        />
        <div className="mt-10  px-5 lg:px-0">
          <div className="flex-center">
            <div className="main__title-div">
              <h2 className="main__title">
                {servicesData?.StaticServicesData?.ServiceTitle}
              </h2>
            </div>
          </div>
          <p className="medicalServices__paragraph">
            {servicesData?.StaticServicesData?.ServicesDes}
          </p>
          <div className="medicalServices__btns  flex-center">
            <button
              className={toggle === 1 ? "btn-fill" : "btn-fill notActive"}
              onClick={() => toggleTap(1)}
            >
              {language === "en" ? "Medical Services" : "الخدمات الطبية"}
            </button>
            <button
              className={toggle === 2 ? "btn-fill" : "btn-fill notActive"}
              onClick={() => toggleTap(2)}
            >
              {language === "en" ? "Equipment & Units" : "المعدات والوحدات"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroMedical;
