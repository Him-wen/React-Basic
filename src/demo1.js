import React from 'react'
import ReactDOM from 'react-dom'

class Hellotest extends React.Component {
  render(){
    return(
      <div>
        <h1>类组件</h1>
        可以内嵌更多的组件（函数组件和es6组件均可以）
      </div>
    )
  }
}

ReactDOM.render(
  <Hellotest />,
  document.querySelector('#root')
)

export default Hellotest;