import React from 'react'
import {useState} from 'react'

function App() {
    const [count,setCount]=useState(0)
    return (
        <div>
            <h1>计数{count}</h1>
            <button onClick={setCount(count+1)}>点击</button>
        </div>
    )
}

export default App