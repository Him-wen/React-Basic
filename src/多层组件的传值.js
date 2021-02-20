import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

function User2(props) {
  return(
    <div className="user12">
         <div className="user3">
         <h1>内层+{props.weather}</h1>
         </div>
       </div>
  )
}

function Teat1(props) {
  return(
     <div className="user1">
       <h1>{props.name}</h1>
       <User2 weather={props.weather} />
     </div>
  )
}


function Test(props) {
  return(
    <div>
      <Teat1 name="a" weather={props.weather}/>
      <Teat1 name="b" />
      <Teat1 name="c" />
    </div>
  );
}


ReactDOM.render(
  <Test weather="weather" />,
  document.querySelector('#root')
)