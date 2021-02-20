import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

class Helloworld extends React.Component{
  constructor(props){
    super(props)
    this.state={
      time:new Date()
    }
  }

  componentDidMount(){
    this.timerID = setInterval(
      ()=>this.tick(),1000
    )
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      time:new Date()
    })
  }

  render(){
    return(
      <div>北京时间：+{this.state.time.toLocaleTimeString()}</div>
    )
  }
}

ReactDOM.render(
  <Helloworld />,
  document.querySelector('#root')
)