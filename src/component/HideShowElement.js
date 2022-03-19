import React,{useState} from "react";


function HideShowElement(){
    const [status,setStatus]= useState(true)
    return(
        <>
        {
            status?
            <h1 style={{backgroundColor:"skyblue",margin:20}}>Hide the elemet</h1>
            :false
        }
        <h1>Hide box when we click on button</h1>
        <button onClick={()=> setStatus(true)}>Show</button>
        <button onClick={()=>setStatus(false)}>Hide </button>

        <button onClick={()=> setStatus(!status)}>Toggle Btn</button>
        </>
    )
}
export default HideShowElement;


/**QUESTION -1 we want to hide and show element when we click a button 
 * step -1 fist of all we need to create two button fist is hide and second is Show
 * step -2 we want to hide and show when we click show we are called the onClick funtion
 * step -3 we need to useState and the useState control all work of hide and show ;
 * step -4 fist we import useState and by default value true its our wish we sould show as
 * step -5 set the condition status is true when hide the <h1> tag and :null the value;
 * step -6 we want to hide element  the setStatus(false) set the value false in setStatus true when we show element;
 * 
 * QUESTION -2 we want to toggle the vlaue when we click hide the element and same as show when we click
 *  step -1 used the status is not equal .example setStatus(!status).
 *  tip if element show when we click toggle button element auto hide some as show
 *  */