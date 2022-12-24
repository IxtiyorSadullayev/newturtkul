import React from 'react'
import BottomNavbar from './bottomNavbar'
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
    </div>
  )
}