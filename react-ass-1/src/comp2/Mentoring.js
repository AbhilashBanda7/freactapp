import React from 'react'
import  { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Outlet } from 'react-router-dom';
import "./Mentoring.css"
function Mentoring(){
    let { register,handleSubmit,formState:{errors}}=useForm();
    let [course,setCourse]=useState('')
    let [mentors,setMentors]=useState([])
  function registerAsMentee(){
    console.log(course);
    fetch(`http://localhost:3131/mentors?Expertise=${course}`,{
        method:"GET"
    }).then(res=>res.json())
    .then(data=>{
        console.log(data);
      if(data.length===0){
        alert("Mentor Unavilable")
      }
      else{
        setMentors(data)
        console.log(mentors);
      }
    })
  };

  return (
    <div className=' text-center mx-auto mt-5 card-2 d-flex justify-content-center align-items-center flex-wrap w-75'>
        <form onSubmit={handleSubmit(registerAsMentee)}>
    
        <h1 className='h'>Meet Our Mentors</h1>
     
        <div>
        <input className='m-2'
          type="text"
          placeholder="Course"
          value={course}
          {...register("course",{required:"true"})}
          onChange={(e) => setCourse(e.target.value)}
        />
        {errors.course?.type === "required" && (
            <p className="text-danger">Enter Course</p>
          )}
        </div>
        <button >Register as Mentee</button>
        </form>
      {mentors.length==0?<p></p>:<div>
        <h3>Available Mentors</h3>
        <div className='d-flex justify-content-center align-items-center  flex-wrap w-100 '>
          {mentors.map((mentor) => (
            <div key={mentor.id} className='card w-50 m-1 h-100 '>
                <img src={mentor.image} alt="" className="card-head w-50 mx-auto p-1 " />
              <strong>{mentor.name}</strong>
              <p>Expertise: {mentor.Expertise}</p>
              <p>Availability: {mentor.Availability}</p>
              <p>Contact: {mentor.Contact}</p>
              {/* Additional mentor details can be displayed here */}
            </div>
          ))}
        </div>
      </div>}

      <Outlet></Outlet>
    </div>
    )
}

export default Mentoring;

