import React,{Component} from "react";

import ChildCC from "./ChildCC";


class ParentCC extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            parent:"parentHeading"
        }
    }
    greetParent = (childMessage) =>{
        alert(`Hello Message from Child ${childMessage}`)
    }

    render(){
        return(
            <div>
                <h1>{this.state.parent}</h1>
                <ChildCC onAction = {this.greetParent}></ChildCC>
            </div>
        )
    }
}
export default ParentCC 