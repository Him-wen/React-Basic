import React from 'react'
import ReactDOM from 'react-dom'
import Rehooks from '../src/coderwhy-hook/addefface'
import Refstest from './refs'
import Hellotest from './demo1'
import StateandLife from './State&生命周期'
import Toggle from './事件处理'
import Hello04 from './列表渲染'
import Test from './多层组件的传值'
import Hello05 from './子传父相关传值'
import AppC from './contextapi'
import Example from './coderwhy-hook/addefface'
import App1 from './组件通信案例/App'
import RefDemo from './Ref使用'





/**
 * 当 <xxxx /> 被传给 ReactDOM.render()的时候
 * React 会调用 xxxx 组件的构造函数
 * 
 */

 function App() {//函数组件的写法
     return(
       <div>
        <RefDemo />
        {/* 这里面修改具体逻辑 */}
       </div>
     )
 }
ReactDOM.render(
    <RefDemo />,
    document.getElementById('root')
)