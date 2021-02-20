import React,{Component, component} from 'react'
import ReactDOM from 'react-dom'

class Refstest extends Component{
    constructor(props){
        super(props);
        this.myRefs = React.createRef();
    }
    
    componentDidMount(){
        console.log("componentDidMount",this.myRefs);
        console.log("未修改",this.myRefs);
        if(this.myRefs && this.myRefs.current){
            this.myRefs.current.innerHTML = "shandiren";
            console.log("修改",this.myRefs);
        }
    }

    componentDidUpdate(){
        console.log("componentDidUpdate",this.myRefs);
        if(this.myRefs && this.myRefs.current){
            this.myRefs.current.innerHTML = "shandiren"
        }
    }


    render(){
        return(
            <div>
                <div>--------------------------</div>
                <div ref={this.myRefs}>{this.myRefs.current}</div>
            </div>
        )
    }
}

ReactDOM.render(
    <Refstest />,
    document.querySelector("#root")
)

export default Refstest;