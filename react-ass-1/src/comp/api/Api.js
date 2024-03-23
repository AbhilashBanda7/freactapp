import { useEffect, useState } from "react";

function Api() {
    let [users,setUser]=useState([]);
    useEffect(()=>
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((userlist)=>setUser(userlist))
    },[]);
    
    console.log(users);
    return(
        <div>
            <h1 className='text-info display-2'>List of Users</h1>
        <div className="container">
            <table className="table text-center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(userObj=><tr key={userObj.id}>
                            <td>{userObj.id}</td>
                            <td>{userObj.name}</td>
                            <td>{userObj.username}</td>
                            <td>{userObj.email}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
        </div>
    );
    
}
export default Api;