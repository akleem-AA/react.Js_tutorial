import React,{useState} from "react";



function GetInputValue(){
    const [data,setData] = useState(null)
    function getData(val){ 
        setData(val.target.value)
        console.log(val.target.value)
    }
    return(
        <div>
            <h1>input value = {data}</h1>
            <input type="text" placeholder="ente the value" onChange={getData}/>
        </div>
    )
} 
export default GetInputValue;

/* QUESTION how to get input box value
    step -1 fist of all we need to create a  input box and create a onChange function getdata
    step -2 the getData function a take a single parameter;
    step -3 target the value of input box the target keyword print the moment of input box
    step -4 we need to print value of target input box 
    step -5 the print value of input box we need to state 
    step -6 import the useState and set the const [data,setData] = useState(by default value set)
    setp -7 where we want to print these input value where simply wirte {data}

*/