import React from 'react'
import Ijtimoiy from './Ijtimoiy'
import './homepage.css'
import Navbar from './Navbar'
import Asosiy from './Asosiy'
import Ofy from './OFYlar/Ofy'
import AboutSite from './AboutSite/AboutSite'
import News from '../News/News'
import Oyflar from './OFYlar/Oyflar'
import CardsHome from './CardsHome'
function HomePage() {
  return (
    <>
      <header>
        <Ijtimoiy />
        <hr />
        <Navbar />
        <Asosiy />
      </header>
      <Ofy />
      <AboutSite />
      <CardsHome />
    </>
  )
}

export default HomePage