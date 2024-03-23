import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate,Link } from 'react-router-dom';
import  {hashSync} from 'bcryptjs'
function Register() {
  // let [users,setUsers]=useState([])
  let { register,handleSubmit,formState:{errors}}=useForm();
  let navigate=useNavigate();

  function Show(obj){
    let hashpass=hashSync(obj.pass,5)
    obj.pass=hashpass;
    fetch("http://localhost:4000/users",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(obj)
    })
    .then(res=>{
        console.log(res);
      if (res.status===201){
        navigate('/login')
      }})
    .catch(err=>console.log("err in registaion"))
  }
  return(
    <div className='text-center'>
      <div className="card w-50 h-100 mx-auto">
      <form onSubmit={handleSubmit(Show)}>
    
    <div className="row row-cols-2 mx-auto p-1 m-1 g-2">
        <div>
        <input type="text" id=" firstname" placeholder="FirstName" className="input-control  " {... register("firstname",{required:true,min:"abhi"})}/>
        {errors.firstname?.type === "required" && (
            <p className="text-danger">FirstName is required</p>
          )}
        {errors.firstname?.type === "min" && (
            <p className="text-danger">minLength</p>
          )}
        </div>
        <div>
        <input type="text" id=" lastname" placeholder="LastName" className="input-control " {... register("lastname",{required:true})}/>
        {errors.lastname?.type === "required" && (
            <p className="text-danger">LastName is required</p>
          )}
        </div>
    
    </div>
    <div className="row row-cols-2 mx-auto p-2">  
      <div>  
        <input type="email"  id="email" placeholder="email" {...register("email")}/>
      </div>
      <div>
        <input type="tel"  id="tel" placeholder="PhnNo" {...register("tel")}/>
      </div>
    </div>
      <div className='row row-cols-3 d-block mx-auto p-2'>
        <input type="password" {...register("pass")} id="pass" placeholder='password' />
      </div>
        <button className="btn border m-1">Register</button>
        <p className="lead text-center">
        Already a User !
        <Link to="/login" className="fs-4 px-3">
          Login
        </Link>
        here
      </p>
      </form>
      </div>
      
    </div>
  );
}

export default Register;