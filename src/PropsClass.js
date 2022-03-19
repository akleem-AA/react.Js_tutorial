import { Component } from "react";

class PropsClass extends Component{
    render(){
        console.log("check the how many data are coming",this.props)
        return(
           
            <div style={{backgroundColor:"skyblue",margin:20}}>
            <h4>get the fist data= {this.props.name}</h4>
            <h4> {this.props.data}</h4>
            </div>
        )
    }
}
export default PropsClass;


//how can we send the data by using props in app.js file 
//how can i get the data in class component by using props and how to check how manys data are comming in app.js file

/* we are simply check how many data are coming in app.js file by using props
    we are always used the console.log(this.props).it always show the all incoming data over here */

//QUESTION -1 can we change the props data in which component we are receiving the data
     //ANS- we can only change data when we send ..we can not change the data when we recieve