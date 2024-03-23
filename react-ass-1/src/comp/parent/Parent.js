
import Child from '../child/Child'
import {useState} from 'react'

function Parent() {

    //state
    let a=10;
    let [childData,setChildData]=useState('')

    function getDataFromChild(x){
       setChildData(x)
    }

  return (
    <div className='bg-secondary p-5 mt-5 text-white'>
        <h1>Parent Component</h1>
        <h2>Data from Child : {childData}</h2>
        <Child data={a} func={getDataFromChild} />
    </div>
  )
}

export default Parent