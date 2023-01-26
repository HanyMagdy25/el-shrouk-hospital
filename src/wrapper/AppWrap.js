import React from "react";
import SocialMedia from "../components/SocialMedia/SocialMedia";

const AppWrap = (Component) =>
  function HOC() {
    return (
      <div className="app__container">
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
        </div>
      </div>
    );
  };

export default AppWrap;