import React from "react";
import { useForm } from "react-hook-form";
import { Link,useNavigate } from "react-router-dom";
import {compareSync} from 'bcryptjs'
import { UserContext } from '../context/UserContext';
import { useContext } from "react";
function Login() {
    let [users,setUser]=useContext(UserContext)
  let { register, handleSubmit } = useForm();
  let navigate=useNavigate()
  function sub(userCrdentials){
    console.log(userCrdentials.username);
    fetch(`http://localhost:4000/users?firstname=${userCrdentials.username}`,{
      method:"GET"
    }).then(res=>res.json())
    .then(data=>{
      if(data.length===0){
        alert("invalid username")
      }
      else{
        console.log(userCrdentials.username);
        setUser(userCrdentials.username)
        let result =compareSync(userCrdentials.password,data[0].pass)
        if (result){
          navigate("/")
        }
        else{
          alert("worng password")
        }
      }
    })
  }
  //form submit
  return (
    <div>
      <h1 className="display-3 text-info text-center">User Login form</h1>
      <form
        action=""
        className="w-50 mx-auto mt-5 bg-light p-4"
        onSubmit={handleSubmit(sub)}
      >
        {/* username */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            {...register("username")}
            id="username"
            className="form-control mb-4"
          />
        </div>
        {/* password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            id="password"
            className="form-control mb-4"
          />
        </div>

        <button
          type="submit"
          className="btn btn-info text-secondary d-block mx-auto fs-5"
        >
          Login
        </button>
      </form>

      <p className="lead text-center">
        New User !
        <Link to="/register" className="fs-4 px-3">
          Register
        </Link>
        here
      </p>
    </div>
  );
}

export default Login;