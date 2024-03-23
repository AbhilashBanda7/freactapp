import { useState } from "react";
import Child from '../childInDec/Child'
function Parent() {
    let [counter,setNewCount]=useState(0)
    function count(){
        setNewCount(counter+1)
    }
    function countde(){
        setNewCount(counter-1)
    }
    return(
        <div style={{backgroundColor:"pink"}} className="w-50 mx-auto m-4">
            <div className="p-1">
            <h1 className="border w-25 mx-auto m-2 rounded-pill bg-danger">{counter}</h1>
            <Child fun={count} fu={countde}></Child>
            </div>
        </div>

    );
    
}
export default Parent;