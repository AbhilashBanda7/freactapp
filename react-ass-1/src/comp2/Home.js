import React from 'react'
import Nav from './Nav'
import Login from './Login'
import { Outlet } from 'react-router-dom'
import Intro from './Intro'
import Courses from './Courses'
import Foot from './Foot'
function Home() {
  return (
  <div className='text-center bg-dark'>
    <div className='p-2 header'>
    <Intro></Intro>
    </div>
    <p> </p>
    <Courses></Courses>
    <Outlet></Outlet>
    <Foot></Foot>
  </div>
  )
}

export default Home