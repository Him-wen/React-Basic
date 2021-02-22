import React, { Component } from 'react'

export default class TabControl extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentIndex:0//这个是当前的默认的index
        }
    }
    render() {
        // const {titles} = this.props;
        // const {currentIndex} = this.state;//这是自己的，相当于把this.state里面的东西给解构出来了
        return (
            <div className="tab-control">
                {
                    this.props.titles.map((item,index)=>{//都是通过index来保证数据的一致
                        return (
                        <div key={index}
                        onClick={e=>this.itemClickaaaaaaa(index)}
                        >{item}</div>
                        )
                    })
                }
            </div>
        )
    }

    itemClickaaaaaaa(index){//子组件的方法
        this.setState({
            currentIndex:index//改成点击时的index，注意这里是控制本层currentindex的逻辑
        })
        
        this.props.itemClick(index);//这个方法是App.js的currentindex控制的逻辑
        console.log('点击add');
    }

}
