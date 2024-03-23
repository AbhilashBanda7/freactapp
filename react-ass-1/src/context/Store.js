import React, { useState } from 'react'
import { CounterContext } from './CounterContext'
function Store({children}) {
 
    let [count,setCounter]=useState(0)
    return (
    <CounterContext.Provider value={[count,setCounter]}>
        {children}
    </CounterContext.Provider>
  );
}

export default Store