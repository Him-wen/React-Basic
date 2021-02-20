import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import Redux ,{createStore} from 'redux'
import {Provider,connect} from 'react-redux'

// 用于创建新的状态
// 这是一个 reducer，形式为 (state, action) => state 的纯函数
const reducer = function (state={num:0},action) {
    // 通过修改一个action的值来修改state，一般不能来直接 修改数据
    // 改变动作和数据
    switch(action.type){
        case "add":
            state.num++;
            break;
        case "des":
            state.num--;
            break;
        default:
            break;
    }
    return {...state}
}


// 创建仓库
const store = createStore(reducer)



function add() {
    // 通过仓库的方法进行修改数据 改变内部 state 惟一方法是 dispatch 一个 action。
    store.dispatch({type:"add"})
    console.log(store.getState());
}

function des() {
    store.dispatch({type:"des"})
    console.log(store.getState());
}

const Hello05= function (props) {
    return(
        <div>
            <h1>计数：{store.getState().num}</h1>
            <button onClick={add}>+1</button>
            <button onClick={des}>-1</button>
        </div>
    )
}

ReactDOM.render(
<Hello05/>, 
document.getElementById("root")
);

// 每次在触发状态的改变重新渲染一遍数据 这是一个函数
store.subscribe(()=>{
    ReactDOM.render(
        <Hello05/>, 
        document.getElementById("root")
        )
    }
)



// class Example extends React.Component{
//     constructor(props){
//         super(props)
//         this.state=store.getState()
//         console.log(store.getState())
//     }

//     render(){
//         return(
//             <div>
//             <h1>计数：{this.state}</h1>
//             <button onClick={add}>+1</button>
//             <button onClick={des}>-1</button>
//         </div>
//         )
//     }
// }