import { useState } from "react";
function DisUser(){
    let users=[
        {
          id: 1,
          email: "michael.lawson@reqres.in",
          first_name: "Michael",
          last_name: "Lawson",
          avatar: "https://reqres.in/img/faces/7-image.jpg",
        },
        {
          id: 2,
          email: "lindsay.ferguson@reqres.in",
          first_name: "Lindsay",
          last_name: "Ferguson",
          avatar: "https://reqres.in/img/faces/8-image.jpg",
        },
        {
          id: 3,
          email: "tobias.funke@reqres.in",
          first_name: "Tobias",
          last_name: "Funke",
          avatar: "https://reqres.in/img/faces/9-image.jpg",
        },
        {
          id: 4,
          email: "byron.fields@reqres.in",
          first_name: "Byron",
          last_name: "Fields",
          avatar: "https://reqres.in/img/faces/10-image.jpg",
        },
        {
          id: 5,
          email: "george.edwards@reqres.in",
          first_name: "George",
          last_name: "Edwards",
          avatar: "https://reqres.in/img/faces/11-image.jpg",
        },
        {
          id: 6,
          email: "rachel.howell@reqres.in",
          first_name: "Rachel",
          last_name: "Howell",
          avatar: "https://reqres.in/img/faces/12-image.jpg",
        },
      ];
      let [idx,setNewUser]=useState(0)
    function changeUser(){
        if(idx<users.length-1){
            setNewUser(idx+1)
        }

    }
    function changeUserPre(){
        if(idx>0){
            setNewUser(idx-1)
        }

    }

    return(
        <div>
            <h1>User</h1>
            <div className="card w-50 mx-auto shadow-lg bg-light">
                <img src={users[idx].avatar} alt="" className="w-25 mx-auto mt-5" />
                <div className="card-body ">
                    <h1>{users[idx].first_name} {users[idx].last_name}</h1>
                    <p className="lead">{users[idx].email}</p>
                </div>
            </div>
            <button className="btn btn-warning" onClick={changeUser}>Next</button>
            <button className="btn btn-warning m-5" onClick={changeUserPre}>Prev</button>


        </div>
    )
}
export default DisUser;