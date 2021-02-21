import React,{useState,useEffect} from 'react'
import ReactDOM from 'react-dom'
import useUpdate from './useUpdate'

export default function Example() {
    const [count,setCount]=useState(0);
/*
调用 useState 方法的时候做了什么? 它定义一个 “state 变量”。
我们的变量叫 count， 但是我们可以叫他任何名字，比如 banana。
这是一种在函数调用时保存变量的方式 —— useState 是一种新方法，
它与 class 里面的 this.state 提供的功能完全相同。一般来说，
在函数退出后变量就会”消失”，
而 state 中的变量会被 React 保留。
核心：我们通过调用 useState Hook 声明了一个新的 state 变量。
它返回一对值给到我们命名的变量上
注意函数组件和类组件的区别：hook-usestate都是为了函数服务的
*/
    useEffect(()=>{
        document.title = `this is ${count} times`
    })

    /*
    和class做对比
    了解了 useEffect 可以在组件渲染后实现各种不同的副作用。
    有些副作用可能需要清除，所以需要返回一个函数：
    */
    return(
        <div>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>
                Click me
            </button>
        </div>
    )
}