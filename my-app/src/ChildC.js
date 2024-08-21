import React from "react";

const ChildC = ({onAction}) => {
    const handleClick = () =>{
        onAction("This Message is from Child.")
    }
    return(
        <div>
            <h2>Child Component</h2>
            <button onClick={handleClick}>Send Message to Parent</button>
        </div>
    )
}

export default ChildC;