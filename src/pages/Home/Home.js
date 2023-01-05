import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import News from "../../components/News/News";
import ServecisSection from "../../components/ServecisSection/ServecisSection";
import WeCare from "../../components/WeCare/WeCare";
import godownIcon from "../../assets/godown.png"
import Team from "../../components/Team/Team";

const url_main = "https://el-shrouk-hospital-dashboard.technomasrsystems.com"

function Home({language,setLanguage}) {
  const [loading, setLoading] = useState(true);
  const [servicesData, setServicesData] = useState([]);
  useEffect(() => {
    fetch(`${url_main}/api/services`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        lang: language,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setServicesData(data)
        // console.log("33",data)
        // setSettings(data.data);
    
      });
  }, [language]);
  return (
    <div>
      <Hero setLanguage={setLanguage} language={language}/>
      <div className="container flex justify-center items-center mt-10  lg:mt-20"  >
        <a href="#services"> <img src={godownIcon} alt="icon" loading="lazy" /></a>
      </div>
      <ServecisSection language={language} servicesData={servicesData}/>
      <WeCare language={language}/>
      <News/>
      <Team language={language}/>
    </div>
  );
}

export default Home;
