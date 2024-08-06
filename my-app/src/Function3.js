import React,{useState} from "react";

const FunctionThree = () =>{
    const [isLoggedIn,setLoggedIn] = useState(false)
    const renderMessage = () =>{
        if(isLoggedIn){
            return <p>You are Logged In</p>
        }
        else{
            return <p>You are Logged Out</p>
        }
    }

    return(
        <div>
            <h1>Welcome to Our Website !</h1>
            {renderMessage()}
            <button onClick={()=>setLoggedIn(!isLoggedIn)}>
                {isLoggedIn?'Log Out':'Log In'}
            </button>
        </div>
    )
}

export default FunctionThree