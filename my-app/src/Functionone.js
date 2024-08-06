// ShortCircuit

import React,{useState} from "react";

const Functionone = ()=>{
    const [isLoggedIN,setLoggedIn] = useState(false)
    return(
        <div>
        <h1>Welcome to our Website ! </h1>
        {isLoggedIN && <p>You are Logged IN</p>}
        <button onClick={()=>setLoggedIn(!isLoggedIN)}>
            {isLoggedIN?'Log Out':'Log In'}
        </button>
        </div>
    )
}

export default Functionone