import React, { useState } from "react";

function Form() {
    const [name,setName] = useState()
    const [slct,setSelect] = useState(" ")
    const [check,setCheck] = useState(false)

    function fromSumit(e){
        
        console.log("form sumbit")
        console.log(name,slct,check)
        e.preventDefault()
    }
    return (
        <div >
            <h1>Input form</h1>
            <form onSubmit={fromSumit} >
                <input type="text" placeholder="enter you name"  onChange={(e)=>setName(e.target.value)} /> <br /> <br />
                <select onChange={(e) =>setSelect(e.target.value) }>
                    <option>bijnor</option>
                    <option>delhi</option>
                    <option>kolkata</option>
                    <option>pakistan</option>

                </select><br /> <br />
                <input type="checkbox" onChange={(e) =>setCheck(e.target.value)} /><span>select the box</span><br /> <br />
                <button type="submit">Submit from</button><br /> <br /><br /> <br />
            </form>
        </div>
    )
}
 export default Form;

 /** we wnat to create a form and get the value of form..when we click on submit button
  * step -1 create a form UI
  * step -2 import useState and set the useState according to get value like true and string etc;
  * 
  * 
  * QUESITION -1 . we want to get the value entire from ..
  *  we have to method to get value entire form..
  * .............FIST METHOD.........
  * step -1 fist we are add onChange function each element like input box and other element
  * step -2 create a function of each element to get value by using function ...
  *      In this condition we have to create separate function for each tag.
  * 
  * ...........SECOND METHOD...........
  * step -1 we can add the useState second paramete and pass one parameter and get the value
  * step -2 each tag work same as 
  * example .. onChange={(e)=>useStateSecondArgument(e.target.value)}
  */