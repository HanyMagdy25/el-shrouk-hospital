import { useEffect, useState } from "react";
import Gallery from "../../components/Gallery/Gallery";
import EventsNews from "./EventsNews/EventsNews";
import HeroNews from "./HeroNews/HeroNews";
import "./News.css";
const url_main = "https://el-shrouk-hospital-dashboard.technomasrsystems.com";

function News({ setLanguage, language }) {

  const [loadingEvents, setLoadingEvents] = useState(true);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch(`${url_main}/api/newsEvents`, {
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
        setLoadingEvents(false);
        setEvents(data)
        console.log("loadingEvents", data);
      });
  }, [language]);

  return (
    <div>
      <HeroNews setLanguage={setLanguage} language={language} />
      <EventsNews language={language} events={events} />
      <Gallery language={language} />
    </div>
  );
}

export default News;
