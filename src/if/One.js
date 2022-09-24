import React, { useState } from "react";

function OnLine() {
  return <h1>هذا المستخدم نشط الآن</h1>;
}

function OffLine() {
  return <h1>هذا المستخدم غير نشط الآن</h1>;
}

function One() {
  const [onLine, setOnLine] = useState(true);
  const [userType, setUerType] = useState('Admin');
  
  const hsoubProducts = ['a', 'b', 'c', 'a'];
  const print = hsoubProducts.map((item, index) => <li key={index}>{item}</li>)

  let userStatus = <OffLine />;
  if (onLine) {
    userStatus = <OnLine />
  }

  const h1Styl = {
    textAlign: "left",
    color: "red"
  }

  const [isBlue, setBlue] = useState(false);

  if (isBlue) {
    h1Styl['color'] = 'blue';
  }
  return (
    <React.Fragment>
      <h1 style={h1Styl}>عنصر مصير دائما</h1> 
      {userStatus}
      {window.outerWidth > 800 && <h2>هذا التطبيق مفتوح من خلال الحاسب</h2>}
      <h3 style={h1Styl} onClick={() => setBlue(!isBlue) }>{userType === 'Admin' ? 'Admin': 'User'}</h3>
      {/*  */}
      <ul>
        {print}
      </ul>
    </React.Fragment>
  )
}

export default One;
