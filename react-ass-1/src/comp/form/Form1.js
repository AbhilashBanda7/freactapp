import { useState } from "react";

function Form(){
    let [name,setName]=useState('');
    function get(e){
        setName(e.target.value);
    }
    let [pass,setPass]=useState('');
    function getpass(e){
        setPass(e.target.value);
    }
    function disName(e){
        e.preventDefault()
        console.log(name);
        console.log(pass);
    }

    return(
        <div>
            <form action="" onSubmit={disName}>
                <input type="text" className="form-control" onChange={get} />
                <input type="password" className="form-control" onChange={getpass} />
                <button className="btn" >submit</button>
            </form>
        </div>
    );
}
export default Form;
