import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './on.css'

class Helloworld extends React.Component{
  constructor(props){
    super(props)
    this.state={
      
    }
  }

  onclickenent1(){
    console.log('点击第一个按钮');
  }
  onclickenent2(){
    console.log('点击第二个按钮');
  }

  render(){
    return(
      <div>
        <button onClick={this.onclickenent1}>内容1</button>
        <button onClick={this.onclickenent2}>内容2</button>
        <div>
          <h1 className="a">内容一</h1>
          <h1 className="b">内容二</h1>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Helloworld />,
  document.querySelector('#root')
)