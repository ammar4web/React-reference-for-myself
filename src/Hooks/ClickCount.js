import React, { useState } from "react";

function ClickCount() {
  // 
  // hooks | useState
  const [counter, setCounter] = useState(0);
  // 

  return (
    <React.Fragment>
      <hr />
      <h4>ClickCount Components</h4>
      <p>لقد نقرتني { counter } مرات</p>
      <button onClick={() => setCounter(counter + 1)}>انقر الزر</button>
    </React.Fragment>
  );
}

export default ClickCount;
