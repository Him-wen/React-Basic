import React from 'react';
import ReactDom  from 'react-dom';

class StateandLife extends React.Component{//类组件的写法
    constructor(props){//构造函数方法
        super(props);//调用父类构造函数
        this.state={//可修改的state,可以看作一个对象
            date:new Date()
        };
    }

    /**
     * 当 Clock 的输出被插入到 DOM 中后,也就是ReactDOM.render()
     * React 就会调用 ComponentDidMount() 生命周期方法
     */
    componentDidMount(){//会在组件已经被渲染到 DOM 中后运行
        this.timeID = setInterval(() => {
            this.tick();//执行相关的逻辑函数
        }, 1000);
    }

    tick(){//实现tick函数
        this.setState({
            date:new Date()
        })
    }
    
    componentWillUnmount(){
        clearTimeout(this.timeID);//清除定时器
    }
    
    render(){//Class组件的一个方法，返回一个DOM元素
        return(
            <div>
                <div>Hello world</div>
                <div>It is {this.state.date.toLocaleTimeString()}</div>
            </div>
        )
    }
}

export default StateandLife;