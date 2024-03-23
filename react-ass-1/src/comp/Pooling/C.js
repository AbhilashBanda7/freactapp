import React from 'react';
import { CounterContext } from '../../context/CounterContext';
import { useContext } from 'react';

function C() {
    let [count,setCounter]=useContext(CounterContext)
    function Change() {
        setCounter(count+1)
    }
  return (
    <div className='bg-danger'>
        <h1>{count}</h1>
        <button onClick={Change}>change</button>
    </div>

  )
}

export default C;