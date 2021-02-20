import React,{useState} from 'react'
import ReactDOM from 'react-dom'

class Rehooks extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:1
        }
    }

    componentDidMount(){ class组件写法
        document.title=this.state.msg
    }

    componentDidUpdate(){
        document.title=this.state.msg
    }

    render(){
        return(
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={e=>this.setState({msg:this.state.msg+1})}>+1</button>
            </div>
        )
    }

}

export default Rehooks
