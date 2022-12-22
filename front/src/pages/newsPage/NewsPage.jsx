import React from 'react'
import BottomNavbar from './bottomNavbar'
import MainNavbar from './mainNavbar'
import NavbarMenu from './navbarMenu'

export default function NewsPage() {
  return (
    <div>
      <NavbarMenu />
      <BottomNavbar />
      <MainNavbar />
      <navbarTextIcon />
    </div>
  )
}