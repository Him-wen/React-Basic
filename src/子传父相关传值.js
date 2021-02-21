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

    setChildData=(data)=>{
        this.setState({
            msg:data
        })
        // 方法记得加箭头
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
}

class Hello06 extends React.Component{//子组件将msg01传给父组件
    constructor(props){
        super(props)
        this.state={
            msg01:'hello'
        }
    }
    
    setclick=()=>{
        this.props.setChildData(this.state.msg01)
        // 这是一个回调函数
    }

    render(){
        return(
            <div>
                <button onClick={this.setclick}>点击</button>
            </div>
        )
    }

    
}

// ReactDOM.render(
// <Hello05/>, 
// document.getElementById("root")
// );

export default Hello05;