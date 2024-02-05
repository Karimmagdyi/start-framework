import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer/Footer'
import Copyrights from '../component/Copyrights/Copyrights'

export default function Userlayout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      <Copyrights/>
    </>
  )
}
