import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Home1 from './Home1'
function Root() {
  return (
    <div><Nav></Nav>
    <Outlet></Outlet>
    {/* <Home1></Home1> */}
  </div>
  )
}

export default Root