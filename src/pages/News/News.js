import React from 'react'
import Gallery from '../../components/Gallery/Gallery'
import EventsNews from './EventsNews/EventsNews'
import HeroNews from './HeroNews/HeroNews'
import "./News.css"

function News() {
  return (
    <div>
        <HeroNews/>
        <EventsNews/>
        <Gallery/>
    </div>
  )
}

export default News