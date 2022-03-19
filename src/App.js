import logo from './logo.svg';
import './App.css';
import './User';
import User from './User';
import Login from './component/Login';
import ClassComponent from './ClassComponent';
import State from './State';
import Props from './Props';
import PropsClass from './PropsClass';
import GetInputValue from './component/GetInputValue';
import HideShowElement from './component/HideShowElement';
import Form from './formComponent/Form';





var name = "akleem value"
function alrt() {
  console.log("fist function")
  alert(name)
}
function App() {
  return (
    <div className="App">
      {/* <State /> */}
     {/* <GetInputValue /> */}
      {/* <ClassComponent /> */}
      {/* <User /> */}
      {/* <Login /> */}
      <Form />
     <HideShowElement />
    

      {/* <Props  name ="akleem" email ="akleem789@gmail.com"/> */}
      {/* <Props name="ahmad" email ="akleem789@gmail.com" obj ={{address:"nangal soti",age:'22'}}/> */}
      {/* <PropsClass  name ="class Props send data" data ="send second date" /> */}
      
      {/* <button onClick={alrt}>click me</button> */}


    </div>
  );
}

export default App;
