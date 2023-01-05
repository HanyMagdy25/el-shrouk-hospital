import Gallery from '../../components/Gallery/Gallery'
import EventsNews from './EventsNews/EventsNews'
import HeroNews from './HeroNews/HeroNews'
import "./News.css"

function News({setLanguage,language}) {
  return (
    <div>
        <HeroNews setLanguage={setLanguage} language={language}/>
        <EventsNews language={language}/>
        <Gallery/>
    </div>
  )
}

export default News