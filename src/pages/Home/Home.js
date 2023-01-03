import React from "react";
import Hero from "../../components/Hero/Hero";
import News from "../../components/News/News";
import ServecisSection from "../../components/ServecisSection/ServecisSection";
import WeCare from "../../components/WeCare/WeCare";
import godownIcon from "../../assets/godown.png"
import Team from "../../components/Team/Team";

function Home() {
  return (
    <div>
      <Hero />
      <div className="container flex justify-center items-center mt-10  lg:mt-20"  >
        <a href="#services"> <img src={godownIcon} alt="icon" loading="lazy" /></a>
      </div>
      <ServecisSection />
      <WeCare/>
      <News/>
      <Team/>
    </div>
  );
}

export default Home;
