import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './s.css'

class Hello02 extends React.Component{
  constructor(props){
    super(props)
// data数据相关的绑定
    this.state={
      isactive:true
    }
    // 将事件绑定事件this
    this.check=this.check.bind(this)
  }

  check(){
    console.log('控制');
    this.setState({
      isactive:!this.state.isactive
    })
  }
// 父组件的渲染
  render(){
    return(
      <div>
        <button onClick={this.check}>控制子元素显示</button>
        <Hello03 isactive={this.state.isactive} />
        {/* Hello03就是传出数据 */}
      </div>
    )
  }
}

class Hello03 extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){
    let str=null;
    if(this.props.isactive){
      // 这个active数据是父组件传过来的
      str="abc";
    }else{
      str="";
    }
    return(
      // 通过str的值来控制classname是否显示
      <h1 className={str}>子元素</h1>
    )
  }
}

ReactDOM.render(
  <Hello02 />,
  document.querySelector('#root')
)