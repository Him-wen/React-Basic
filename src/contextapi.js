import React from 'react'
import ReactDOM from 'react-dom'
import {createContext} from 'react'

const A={//A对象
    a:1
}

const ThemeContext = React.createContext("1");
const {Provider} = ThemeContext;

const addtext = self =>({
    add(){
        self.setState(state=>(
            {a:state.a + 1}
        ))
    }
})

class AppC extends React.Component{
    constructor(props){
        super(props)
        this.state={
            ...A,
            ...addtext(this)
        }
    }
    render(){
        return(
            // 创建一个 Context 对象。当 React 渲染一个订阅了这个 Context 对象的组件，这个组件会从组件树中离自身最近的那个匹配的 Provider 中读取到当前的 context 值。
            <Provider value={this.state}>
                {/* value是真正的公共仓库,Provider作为数据提供方 */}
                <AppB />
            </Provider>
        )
    }
}

class AppB extends React.Component{
    render(){
        return(
            <div>
                <AppA />
            </div>
        )
    }
}

class AppA extends React.Component{
    static contextType = ThemeContext;
    // 挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象。这能让你使用 this.context 来消费最近 Context 上的那个值
    add1=()=>{
        this.context.add()
    }
    render(){
        return(
            <div>
                {/* 第一种取值方法 */}
               <h1>这是使用的this.context.a:{this.context.a}</h1> 
               {/*
               第二种取值方法,Consumer作为接收方
               传递给函数的 value 值等同于往上组件树离这个 context 最近的 Provider 提供的 value 值。
                */}
               <h1>这是使用的Consumer:</h1>
               <ThemeContext.Consumer>
                   {
                       value=>value.a
                   }
               </ThemeContext.Consumer>

               <button onClick={this.add1} >+1</button>
            </div>
        )
    }
}

export default AppC;
