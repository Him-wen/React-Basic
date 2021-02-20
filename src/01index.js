import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

// function formaname(user) {
//   return user.first +user.last;
// }

// const user={
//   first:'这是个first字母+',
//   last:'这是个last字母'
// };

// const name='json Perez';
// const element = <h1>hello,{name},{formaname(user)}</h1>;
// let h1=<h1>这是一个普通的js对象</h1>

// ReactDOM.render(h1,document.querySelector('#root'))//<App></App>,//类的实例化

// function clock(){
//   let timer = new Date().toLocaleTimeString();
//   let element = <h1>现在的时间是：{timer}</h1>;
//   let root = document.querySelector('#root');
//   ReactDOM.render(element,root);
// }

// clock();

//setInterval(clock,1000);

function Clock(props){
  return(
    <div>
    <h1>现在的时间是：{props.data.toLocaleTimeString()}</h1>;
    </div> 
  )
}

function fun(){
  ReactDOM.render(
    <Clock data={new Date()} />,
    document.querySelector('#root')
  )
}

//setInterval(fun,1000);