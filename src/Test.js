import React from "react";

// class Test extends React.Component { render() {return ();} }
// <React.Fragment></React.Fragment> }

// { this.props.___ }

class Test extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Test: class | render() | return(...)</h2>
        <p>{ this.props.content } "in class"</p>
      </React.Fragment>
    );
  }
}

export default Test;
