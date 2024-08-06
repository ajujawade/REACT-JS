import React from "react";
import { useState } from "react";

function FunctionFive({message}){
    const [msg,setMessage] = useState(message)
    let changeMessage = ()=>{
        setMessage("Ajay")
    }
    return(
        <div>
            <h1>{msg}</h1>
            <button onClick={changeMessage}>ChangeMessage</button>
        </div>
    )

}

export default FunctionFive;