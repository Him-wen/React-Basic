import React from 'react';
import ReactDom  from 'react-dom';

class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            isToggleOn:true
        };
    }

    handleClick (){
        this.setState(state =>({
            isToggleOn:!this.state.isToggleOn
        }));
    }

    render(){
        return(
            <div>
                <button onClick={()=>this.handleClick()}>
                    {this.state.isToggleOn?"ON":"OFF"}
                </button>
            </div>
        )
    }
}

export default Toggle;