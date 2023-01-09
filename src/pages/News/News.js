import Gallery from "../../components/Gallery/Gallery";
import EventsNews from "./EventsNews/EventsNews";
import HeroNews from "./HeroNews/HeroNews";
import "./News.css";

function News({
  setLanguage,
  language,
  loadingEvents,
  events,
  galleryContent,
}) {
  return (
    <div>
      <HeroNews
        setLanguage={setLanguage}
        language={language}
        events={events}
        loadingEvents={loadingEvents}
      />
      <EventsNews
        language={language}
        events={events}
        loadingEvents={loadingEvents}
      />
      <Gallery language={language} galleryContent={galleryContent} />
    </div>
  );
}

export default News;
