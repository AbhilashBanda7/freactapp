import React, { useEffect, useState } from 'react'
import { UserContext } from './UserContext'
function UserStore({children}) {
    let [users,setUser]=useState("")
    // useEffect(()=>
    // {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then((res)=>res.json())
    //     .then((userlist)=>setUser(userlist))
    // },[]);
  return (
    <UserContext.Provider value={[users,setUser]}>
        {children}
    </UserContext.Provider>
  )
}

export default UserStore; 
