import React from 'react'
function Courses() {
  return (
    <div>
    <div className="card-foot w-75 mx-auto shadow ">
        <h2 className='text-start m-2'>Courses</h2>
    <p className="lead bg-dark p-1 m-3 d-flex d-flex justify-content-evenly">
    <div className="card m-2 p-1 w-25 d-flex justify-content-center align-items-center "  >
        <img src="https://media.geeksforgeeks.org/img-practice/prod/courses/405/Web/Content/ML-DS_1705408960.webp" className="card-img-top " alt="..." />
        <div className="card-body">
            <p className="card-text">
            Complete Machine Learning & Data Science Program</p>
        </div>
        <div className="card-foot"><button className='bg-success'> Explore</button></div>
    </div>
    <div className="card m-2 p-1 w-25 d-flex justify-content-center align-items-center " >
        <img src="https://media.geeksforgeeks.org/img-practice/prod/courses/504/Web/Content/DSA-to-Dev_1705410853.webp" className="card-img-top " alt="..." />
        <div className="card-body">
            <p className="card-text">DSA to Development:
A Complete Guide</p>
        </div>
        <div className="card-foot"><button className='bg-success'> Explore</button></div>
    </div>
    <div className="card m-2 p-1 w-25 d-flex justify-content-center align-items-center " >
        <img src="https://media.geeksforgeeks.org/img-practice/prod/courses/270/Web/Content/Java-Programming_1705409391.webp" className="card-img-top " alt="..." />
        <div className="card-body">
            <p className="card-text">

Master Java Programming - Complete Beginner to Advanced</p>
        </div>
        <div className="card-foot"><button className='bg-success'> Explore</button></div>
    </div>
    </p>
    </div></div>
  )
}

export default Courses