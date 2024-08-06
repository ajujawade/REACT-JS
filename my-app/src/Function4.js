import React from "react";
import { useState } from "react";

// function FunctionFour(prop){
//     console.log(prop.greet)
//     console.log(prop.greet2)
//     return(
//         <div>
//             <h1>Hello {prop.greet}</h1>
//             <h1>Hello {prop.greet2}</h1>
//         </div>
//     )
// }

function FunctionFour({greet,greet2}){
    return(
        <div>
            <h1>Hello {greet}</h1>
            <h1>Hello {greet2}</h1>
        </div>

    )
}

export default FunctionFour;