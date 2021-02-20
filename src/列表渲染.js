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
    const list=[1,2,3,4,5];
    const double = list.map((number)=><li key={number.toString()}>{number*2}</li>)
    // 关于key值取值为tostring，而number变量一定要加括号经验：在 map() 方法中的元素需要设置 key 属性
    return(
      <ul>{double}</ul>
    )
  }
}

ReactDOM.render(
  <Hello04 />,
  document.querySelector('#root')
)