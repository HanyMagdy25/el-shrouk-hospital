import React from "react";

function HeroAboutContent() {
  return (
    <div className="flex-center flex-column heroAboutContent">
      <div className="flex-center">
        <div className="main__title-div">
          <h2 className="main__title">About us</h2>
        </div>
      </div>
      <p>
        Al Shorouk Specialised Hospital (Swiss) is one of the newly established
        medical facilities in the Arab Republic of Egypt, we belongs to Swiss
        Hospitals Management Company, which aspires to gain the confidence of
        all its clients, including individuals, institutions and local and
        international bodies, as it is keen to provide medical and treatment
        services in all of its medical departments.
      </p>
      <button className="btn-fill">Meet Our Team</button>
    </div>
  );
}

export default HeroAboutContent;
