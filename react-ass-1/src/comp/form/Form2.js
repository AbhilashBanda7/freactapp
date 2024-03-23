import { useState } from "react";
import { useForm } from "react-hook-form";
function Form2(params) {
  let [users,setUsers]=useState([])
  let { register,handleSubmit,formState:{errors}}=useForm();
  function Show(obj){
    // console.log(obj);
    setUsers([...users,obj])
  }
  function del(idx) {
    let c=[...users]
    c.splice(idx,1)
    setUsers(c)    
  }
  return(
    <div>
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
    <div className="row row-cols-2  mx-auto p-2">  
      <div>
        <input type="date"  id="bday" placeholder="BirthDay" {...register("bdayy")}/>
      </div> 
      <div>
          <label htmlFor="">Gender</label>
        <div className="form-check">
        <input type="radio"  id="m" value="Male" className="form-check-input" {...register("Gender")}/>
        <label htmlFor="m">Male</label>
        </div>
        <div className="form-check">
        <input type="radio"  id="f" className="form-check-input" value="Female" {...register("Gender")}/>
        <label htmlFor="f">Female</label>
        </div>
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
    <div className="mx-auto">
      <p className="lead">Subject</p>
      <div className="row row-cols-2 d-block mx-auto">
      <select  id="Subject" {...register("Subject",{
        required:true
      })} defaultValue="">
        <option value="" disabled>Choose</option>
        <option value="Math">Math</option>
      </select>
      </div>
      {errors.Subject?.type==="required"&&(<p className="text-danger">Select a opition</p>)}
    </div>
        <button className="btn">Rigister</button>
      </form>
      </div>
      <div>
      <div className="display-5 text-info">
        List of Users
      </div>
      <div>
        <table className="table">
          <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Email</th>
            <th>PhnNo</th>
            <th>Subject</th>
          </tr>
          </thead>
          <tbody>
              { 
                users.map((user,idx)=>
               <tr>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.bdayy}</td>
                  <td>{user.Gender}</td>
                  <td>{user.email}</td>
                  <td>{user.tel}</td>
                  <td>{user.Subject}</td>
                  <td><button onClick={()=>del(idx)}>X</button></td>
                  </tr>
                )}
              
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
}
export default Form2;