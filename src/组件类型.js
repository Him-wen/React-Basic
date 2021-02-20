import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

class Hellotest extends React.Component {
  render(){
    // es6组件里面要用this
    console.log(this)
    return(
      <div>
        <h1>类组件+{this.props.name} </h1>
        可以内嵌更多的组件（函数组件和es6组件均可以）
      </div>
    )
  }
}

ReactDOM.render(
  <Hellotest name="abc" />,
  document.querySelector('#root')
)

// // 函数组件
// function Clock(props){
//   console.log(props);
//   return(
//     <div>
//     <h1>现在的时间是：{props.data.toLocaleTimeString()}</h1>
//     <h1>{props.name}</h1>
//     </div> 
//   )
// }

// function fun(){
//   ReactDOM.render(
//     <Clock data={new Date()} name="abc" />,
//     document.querySelector('#root')
//   )
// }

// fun()