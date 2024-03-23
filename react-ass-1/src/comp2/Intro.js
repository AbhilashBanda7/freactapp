import React from 'react'
import { UserContext } from '../context/UserContext';
import { useContext } from "react";
import './Intro.css';
function Intro() {
    let [users,setUser]=useContext(UserContext)
  return (
    <div className='mx-auto d-flex justify-content-center ' >
        <div className='card bg-secondary '>
        <div className="card-head w-25 mx-auto shadow ">
        {
            users.length==0?<p className="lead bg-info p-1 m-1">WelCome..Please Login!</p>:<p className="lead bg-info p-1 m-1">Welcome..{users}!</p>
        }
        </div>
        <div className="intoinfo card-body  m-1 shadow-2" style={{backgroundColor:"#bf9c8d"}}>
            <p className="lead">
            Embarking on the journey of student opens doors to endless possibilities in the digital landscape. As a student, delving into this field means diving into a realm where creativity, problem-solving, and innovation converge. Every line of code you write shapes the digital experiences of tomorrow, whether it's crafting intuitive user interfaces or architecting robust backend systems. The dynamic nature of web development ensures that there's always something new to learn, from mastering the latest frameworks to adapting to emerging technologies. Moreover, the demand for skilled web developers continues to soar, promising exciting career opportunities and the chance to make a tangible impact in various industries worldwide. So, let your passion for coding propel you forward, as you embark on this exhilarating journey towards mastering the art of career development.
</p>
        </div>
        
        </div>
    </div>
  )
}

export default Intro