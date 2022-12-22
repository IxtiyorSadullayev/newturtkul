import React from 'react'
import Ijtimoiy from './Ijtimoiy'
import './homepage.css'
import Navbar from './Navbar'
import Asosiy from './Asosiy'
function HomePage() {
  return (
    <>
      <header>
        <Ijtimoiy />
        <hr />
        <Navbar />
        <Asosiy />
      </header>
    </>
  )
}

export default HomePage