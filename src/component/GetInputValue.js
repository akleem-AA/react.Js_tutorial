import React,{useState} from "react";



function GetInputValue(){
    const [data,setData] = useState(null)
    const [print,printData] = useState(false)
    function getData(val){ 
        setData(val.target.value)
        console.log(val.target.value)
    }
    
    return(
        <div>
          {
              print?
              <h3> {data}</h3>
              :null
          }
            <input type="text" placeholder="ente the value" onChange={getData}/><br>
            </br>
            <button onClick={()=>printData(true)}>show inputValue</button>
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


  QUESTION -2  we want to print value when we click on  print button   
   step -1 fist need to create a button and add onlClick event;
   step -2 create a second state so we can do by defalut false the value of state 
   step -3 take in if condition the . when we click button then state value true else null
   step -4 tip  its just take a hide the onChange() function value when we click showpintvalue button
            the value show ..and value always show we are just hide the value in fist time

*/