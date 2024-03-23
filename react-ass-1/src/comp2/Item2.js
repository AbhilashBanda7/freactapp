import React from 'react'
import { Outlet } from 'react-router-dom'
function Item2() {
  return (
    <div>
        <Outlet></Outlet>
        item2
    </div>
  )
}

export default Item2