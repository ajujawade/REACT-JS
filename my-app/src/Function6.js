import React from "react";

const item = [
    {id:1,name:"Mango"},
    {id:1,name:"Apple"},
    {id:1,name:"Grapes"},
    {id:1,name:"Banana"},
    {id:1,name:"Papaya"},
]

function FunctionSix(){
    return(
        <div>
            <h1>List Of Fruits : </h1>
            <ul>
                {item.map((item)=>(
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default FunctionSix;