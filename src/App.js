import React from "react";
import "./App.css";
// 
import Test from "./Test";
import Props from "./Props";

// function App() {return ();} 
// use Function rether than class when ever you can

function App() {
  return (
    <div className="App">
      <h1>Hello. I'm Ammar</h1>
      <Test content="This is the Test Component" />
      <Props content="This is the Props From Props Component" />
    </div>
  );
}

export default App;
