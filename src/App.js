import React from "react";
import "./App.css";
// 
import Test from "./Test";
import Props from "./Props";

// {props.___} in function // and insert "prpos" as parameter
// { this.props.___ } in class


// function App() {return ();} 
// use Function rether than class when ever you can

function App() {
  return (
    <div className="App">
      <h1>Hello. I'm Ammar</h1>
      {/* in consol you see Warning: Failed because of array you should write string */}
      <Test content= {[1,2]} />
      {/*  */}
      <Props content="This is the Props From Props Component" >
        <h3>children</h3>
      </Props>
      <button onClick={()=>console.log("onClick Events")}>Click Me</button>
    </div>
  );
}

export default App;
