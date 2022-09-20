import React from "react";

// {props.___}
// props 

function Props(props) {
  return (
    <div className="Props">
      <h2>{props.content}</h2>
      <div>{props.children}</div>
    </div>
  );
}

export default Props;
