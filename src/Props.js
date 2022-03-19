//Props are arguments passed into React components. and we can transfer the data into one C TO another C

 function Props(prop){
     console.log(prop)
     return(
         <div style={{backgroundColor:"gray"}}>
         <h1>Name {prop.name}</h1>
         <h1>Email {prop.email}</h1>
        <h6>obj{prop.age}</h6>
         </div>
     )
 }

 export default Props;
 