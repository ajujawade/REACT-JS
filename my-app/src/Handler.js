import { Component } from "react";
import React from "react";

class ClassHandler extends Component{
    constructor(props){
        super(props)
        this.state = {
            cnt:Number(this.props.count),
            style:{
                color:"green"
            }
        }
    }
    incrementCount =()=>{
            this.setState(()=>({
                cnt:this.state.cnt + 1
            }))
    }
    render(){
        return(
            <div>
                <h1 style={this.state.style}>{this.state.cnt}</h1>
                <button onClick={this.incrementCount}>Click</button>
            </div>
        )
    }
}

export default ClassHandler;