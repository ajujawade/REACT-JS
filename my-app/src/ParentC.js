// parent method as a prop sending to child component , child component 
// will with args which will received in parent

import React,{useState} from "react";
import ChildC from "./ChildC";

const ParentC = () =>{
    const [message,setMessage] = useState("Hello I am From Parent ")

    const handleChildAction = (childMessage) => {
        alert(`Message From Child Component ${childMessage}`)
    }
    return(
        <div>
            <h1>{message}</h1>
            <h1>Parent Component</h1>
            <ChildC onAction={handleChildAction}></ChildC>
        </div>
    )
}

export default ParentC
