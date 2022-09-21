import React, { useState, useEffect } from "react";

function ClickCount() {
  //
  // hooks | useState
  const [counter, setCounter] = useState(0);
  //

  //
  // useEffect
  // سيعمل قبل الريندر
  // componentDidMount() مثل الدالة
  useEffect(() => {
    alert("تم تصيير هذا المكون");
  }, []);
  //

  //
  // useEffect
  // componentDidUpdate() مثل الدالة
  useEffect(() => {
    if (counter === 5) {
      alert("تم النقر 5 مرات");
    }
  }, [counter]);
  //

  return (
    <React.Fragment>
      <hr />
      <h4>ClickCount Components</h4>
      <p>لقد نقرتني {counter} مرات</p>
      <button onClick={() => setCounter(counter + 1)}>انقر الزر</button>
    </React.Fragment>
  );
}

export default ClickCount;
