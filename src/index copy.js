import React from 'react'
import ReactDOM from 'react-dom'
import Redux ,{createStore} from 'redux'
import {Provider,connect} from 'react-redux'

// 这就是展示组件
class Hello extends React.Component{
    render(){
        console.log(this.props)
        return(
            
            <div>
                <h1>{this.props.value}</h1>
                <button onClick={this.props.onadd}>+1</button>
            </div>
        )
    }
}

// react-redux相关内容

function reducer(state={num:0},action) {
    switch(action.type){
        case "add":
            state.num++;
            break;
        default:
            break;
    }
    return {...state}
}

const addtype={
    type:"add"
}

const store = createStore(reducer)

// 将state映射到props函数
function mapStateToProps(state) {
    return{
        value:state.num
    }
}

// 将修改的函数state映射到onadd
function mapDispatchToProps(dispatch) {
    return{
        onadd:()=>{dispatch(addtype)}
        
    }
}

// 相关方法与组件绑定，这就是展示组件
const App1=connect(
    mapStateToProps,
    mapDispatchToProps,
)(Hello)

ReactDOM.render(
    <Provider store={store}>
        <App1 />
    </Provider>,
    document.querySelector("#root")
)