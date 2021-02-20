import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

class Hello04 extends React.Component{
  constructor(props){
    super(props)
    this.state={
      isactive:true
    }
  }

  render(){
    return(
      <div>
      <a href="http://www.baidu.com" onClick={(e)=>{this.check('nihao',e)}}>submit</a>
    </div>
    )
  }

  check(msg,e){
    console.log(msg);
    e.preventDefault();
  }
}

ReactDOM.render(
  <Hello04 />,
  document.querySelector('#root')
)