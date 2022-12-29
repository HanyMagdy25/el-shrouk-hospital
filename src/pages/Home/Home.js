import React from "react";
import Hero from "../../components/Hero/Hero";
import News from "../../components/News/News";
import ServecisSection from "../../components/ServecisSection/ServecisSection";
import WeCare from "../../components/WeCare/WeCare";

function Home() {
  return (
    <div>
      <Hero />
      <ServecisSection />
      <WeCare/>
      <News/>
    </div>
  );
}

export default Home;
