import React from 'react'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
function Root() {
  return (
    <div>
    <Nav></Nav>
    <div className='' style={{minHeight:'88vh'}}>
    <Outlet></Outlet>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default Root