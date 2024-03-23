import React from 'react'
import { CounterContext } from '../../context/CounterContext';
import { useContext } from 'react';

function B() {
  let [count,setCounter]=useContext(CounterContext)
    function Change() {
        setCounter(count+1)
    }
  return (
    <div className='bg-light'>B
     <h1>{count}</h1>
        <button onClick={Change}>change</button></div>
  )
}

export default B;