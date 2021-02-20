import React,{useState} from 'react'
import ReactDOM from 'react-dom'

export default function Rehooks() {
    const [count,setcount] =useState(0);//保存状态 钩入的一个过程
    const [friend,setfriend] = useState(["A","B"]);
    const [student,setStudent] = useState([
        {id:"100",name:"A",age:1},
        {id:"101",name:"B",age:2},
        {id:"102",name:"C",age:3}
        
    ])
    console.log(count);
    console.log(setcount);
    console.log("xuanran");
    // const arr =useState();
    // const count = useState[0];
    // const setcount = useState[1];
    function addStudentWithAge(index) {
        const newstudent=[...student];
        newstudent[index].age += 1;
        setStudent(newstudent);
    }
    
    return(
        <div>
            <h1>Hooks</h1>
            <h1>计时器</h1>
            <h1>{count}</h1>
            <button onClick={()=>setcount(count+1)}>+1</button>
            <button onClick={()=>setcount(count-1)}>-1</button>

            <h1>-------</h1>
            <h1>列表渲染</h1>
            <ul>
                {
                     friend.map((item,index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
            <button onClick={()=>setfriend([...friend,"C"])}>增加朋友</button>

            <h1>-------</h1>
            <ul>
                {
                    student.map((item,index)=>{
                        return <li key={item.id}>
                            <span>姓名：{item.name} 年龄：{item.age}</span>
                            <button onClick={e=>addStudentWithAge(index)}>+1</button>
                        </li>
                    })
                }
            </ul>

        </div>
    )
}