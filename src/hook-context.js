import React, {createContext, useContext,useReducer, useState} from 'react'
import ReactDOM from 'react-dom'
// import Redux ,{createStore} from 'redux'
// import {Provider,connect} from 'react-redux'

// const CountContext = createContext()

// function Example() {useContext案例
//     const [count,setCount]=useState(0);

//     return(
//         <div>
//             <p>You clicked{count} times</p>
//             <button onClick={()=>setCount(count+1)}>点击</button>
//             <CountContext.Provider value={count}>
//                 <Counter></Counter>
//             </CountContext.Provider>
//         </div>
//     )
// }

// function Counter() {
//     const count = useContext(CountContext)
//     return(
//         <div>
//             <h2>sdxbdrfn{count}</h2>
//         </div>
//     )
// }

// useReducer案例
function Example() {
    const [count,dispatch]=useReducer((state,action)=>{
        switch(action){
            case 'add':
                return state+1;
            case 'des':
                return state-1;
            default:
                return state;
        }
    },0)

    return(
        <div>
            <p>{count}</p>
            <button onClick={()=>{dispatch('add')}}>点击+1</button>
            <button onClick={()=>{dispatch('des')}}>点击+1</button>
        </div>
    )
    
}

ReactDOM.render(
    <Example />,
    document.querySelector("#root")
)
