//. The state object is where you store property values that belongs to the component
import {useState,} from "react";

function State(){
    const [data,setData] = useState("Name")
    function updateName(){
     
        setData("Akleem")
        console.log("update function",data)
    }
    return(
        <div>
            <h1>{data} </h1>
            <button onClick={updateName}>update heading</button>
            <h1>state component</h1>
        </div>
    )
}
export default State;