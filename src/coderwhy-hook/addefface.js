import React,{useState,useEffect} from 'react'
import ReactDOM from 'react-dom'
import useUpdate from './useUpdate'

export default function Rehooks() {
    

    // const updatetime =useUpdate()

    // return(
    //     <div>
    //         {Date.now()}
    //         <button onClick={updatetime}>点击刷新时间</button>
    //     </div>
    // )

    // const [count,setcount] =useState(0);

    // useEffect( ()=>{
    //     document.title=count;
    //     console.log("订阅一些事件");
    //     return(()=>{
    //         console.log("取消订阅事件");
    //     })
    // },[])

    // return(
    //     <div>
    //         <h1>{count}</h1>
    //         <button onClick={e=>setcount(count+1)}>+1</button>
    //     </div>
    // )
} 
