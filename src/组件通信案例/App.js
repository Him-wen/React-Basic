import React, { Component } from 'react'
import TabControl from './TabControl'


export default class App1 extends Component {
    constructor(props){
        super(props)
        this.titles =['新款','精选','流行']
        this.state={
            currenttitle:'新款',//这个是默认值
            currentIndex:0
        }
    }
    render() {
        return (
            <div>
                <TabControl itemClick={index=>{this.itemClickb(index)}} titles ={this.titles} />
                <h2>{this.state.currenttitle}</h2>
            </div>
        )
    }

    itemClickb(index){//相当于一个回调函数，把点击Tabcontrol时的当前index给拿回来了
        this.setState({//子组件给父组件传值
            currenttitle:this.titles[index]
        })
    }
}
