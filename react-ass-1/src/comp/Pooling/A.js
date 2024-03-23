import React from 'react'
import B from './B'
// import { CounterContext } from '../../context/CounterContext';
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';
function A() {
    // let [count,setCounter]=useContext(CounterContext)
    let users=useContext(UserContext)
    // function Change() {
    //     setCounter(count+1)
    // }
  return (
    <div className='bg-info'>A
    <div>
    <B></B>
    {/* <h1>{count}</h1>
     */}
     {
      users.map((user)=>
        <div>
        <h1>
          {user.username}
        </h1>
        </div>
      )
     }
     <h1>{users.length}</h1>
        {/* <button onClick={Change}>change</button> */}
    </div>
    </div>
  )
}

export default A;