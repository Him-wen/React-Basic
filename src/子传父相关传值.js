import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

class Hello05 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:null
            // 想要取值必须this.state.msg
        }
    }

    render(){
        return(
            <div>
                <h1>传值{this.state.msg}</h1>
                <Hello06 setChildData={this.setChildData}/>
                {/* 传方法必须this.methods */}
            </div>
        )
    }

    setChildData=(data)=>{
        this.setState({
            msg:data
        })
        // 方法记得加箭头
    }
}

class Hello06 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg01:'hello'
        }
    }

    render(){
        return(
            <div>
                <button onClick={this.setclick}>点击</button>
            </div>
        )
    }

    setclick=()=>{
        this.props.setChildData(this.state.msg01)
        // 这是一个回调函数
    }
}

ReactDOM.render(
<Hello05/>, 
document.getElementById("root")
);