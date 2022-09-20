import React from "react";

// {props.___}
// props 

function Props(props) {
  return (
    <div className="Props">
      <h2>{props.content}</h2>
      <h2>{props.children}</h2>
    </div>
  );
}

export default Props;
