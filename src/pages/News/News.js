import React from 'react'
import ContactUs from '../../components/ContactUs/ContactUs'
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
        <ContactUs/>
    </div>
  )
}

export default News