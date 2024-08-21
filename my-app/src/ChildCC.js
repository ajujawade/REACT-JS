import React,{Component} from "react";

class ChildCC extends Component{
    
    handleClick = ()=>{
        this.props.onAction("Hello From Child")
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Please Click</button>
            </div>
        )
    }

}

export default ChildCC
