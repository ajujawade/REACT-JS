import React,{useState} from "react";

const FunctionTwo = () => {
    const [isLoggedIn,setLoggedIn] = useState(false)

    return(
        <div>
            <h1>Welcome to Our Website ! </h1>
            {isLoggedIn?<p>You are Logged In</p>:<p>You are Logged Out</p>}
            <button onClick={()=>setLoggedIn(!isLoggedIn)}>
            {isLoggedIn?'Log Out':'Log In'}
            </button>
        </div>
    )
}

export default FunctionTwo