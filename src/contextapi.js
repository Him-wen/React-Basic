import React from 'react'
import ReactDOM from 'react-dom'
import {createContext} from 'react'

const A={
    a:1
}

const ThemeContext = React.createContext("1");
const {Provider} = ThemeContext;

const addtext = self =>({
    add(){
        self.setState(state=>(
            {
            a:state.a + 1
        }
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

    add1=()=>{
        this.context.add()
    }
    render(){
        return(
            <div>
                {/* 第一种取值方法 */}
               <h1>{this.context.a}</h1> 
               {/* 第二种取值方法,Consumer作为接收方 */}
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


ReactDOM.render(
    <AppC />,
    document.getElementById('root')
)
