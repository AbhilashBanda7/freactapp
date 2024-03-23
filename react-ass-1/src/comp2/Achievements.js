import React, { useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext';
import { useContext } from "react";
import { Outlet } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import "./Achievements.css"
function Achievements() {
  let [userdi,setUserdi]=useState([])
  let [users,setUser]=useContext(UserContext)
  function show(params) {
    fetch(`http://localhost:3132/achive?firstname=${users}`,{
              method:"GET"
            }).then(res=>res.json())
            .then(data=>{
              if(data.length===0){
                alert("invalid username")
              }
              else{
                console.log(data);
                // setUserdi([...userdi,data]);            
                setUserdi(data);   
                console.log(userdi[0].File1);         
              }
  })}
    // useEffect(()=>{
    //         // console.log(userCrdentials.username);
    //         fetch(`http://localhost:3132/achive?firstname=${users}`,{
    //           method:"GET"
    //         }).then(res=>res.json())
    //         .then(data=>{
    //           if(data.length===0){
    //             alert("invalid username")
    //           }
    //           else{
    //             console.log(data);
    //             // setUserdi([...userdi,data]);            
    //             setUserdi(data);   
    //             // console.log(userdi[0].id);         
    //           }
    //         })
    // },[])
  return (
    <div className='text-center container '>
      <div>
        <button className='sh'  onClick={show}>show</button>
        <h1>{userdi.firstname}</h1>
        {userdi.length==0?<p>No Achievements</p>:<div>{userdi[0].firstname}</div>
}
      </div>

      <Link to="upload"><button>Upload</button></Link>
      <Outlet></Outlet>
    </div>
  )
}

export default Achievements