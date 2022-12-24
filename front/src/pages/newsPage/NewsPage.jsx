import React from 'react'
import BottomNavbar from './bottomNavbar'
import MainBorder_there from './mainBorder_there'
import MainBorder_two from './mainBorder_two'
import MainMenu from './mainMenu'
import MainNavbar from './mainNavbar'
import NavbarMenu from './navbarMenu'
import NavbarTextIcon from './navbarTextIcon'

export default function NewsPage() {
  return (
    <div>
      <NavbarMenu />
      <BottomNavbar />
      <MainNavbar />
      <NavbarTextIcon />
      <MainMenu />
      <MainBorder_two />
      <MainBorder_there />
    </div>
  )
}