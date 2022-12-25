import React from 'react'
import Ijtimoiy from './Ijtimoiy'
import './homepage.css'
import Navbar from './Navbar'
import Asosiy from './Asosiy'
import Ofy from './OFYlar/Ofy'
import AboutSite from './AboutSite/AboutSite'
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
    </>
  )
}

export default HomePage