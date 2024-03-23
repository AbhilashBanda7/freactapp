import React from 'react'
import { useLocation } from 'react-router-dom';
function Userdash() {
    let {state}=useLocation()
    // console.log(state.firstname);
  return (
    <div>
        <p className="lead">{state.firstname}</p>
    </div>
  )
}

export default Userdash;