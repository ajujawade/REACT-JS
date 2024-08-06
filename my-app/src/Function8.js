import React from "react";

const item = [
    {id:1,name:'item1'},
    {id:2,name:'item2'},
    {id:3,name:'item3'},
    {id:4,name:'item4'},
]

const styles = {
    li:{
        color:"red"
    },
    ul:{
        color:"yellow"
    }
}

function FunctionEight(){
    return(
        <div>
            {
                item.map((item)=>(
                    <li style={styles.li}>{item.name}</li>
                ))
            }
        </div>
    )
}

export default FunctionEight;