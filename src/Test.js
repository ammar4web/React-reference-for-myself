import React from "react";
import PropTypes from "prop-types";

// class Test extends React.Component { render() {return ();} }
// <React.Fragment></React.Fragment> }

// { this.props.___ }

class Test extends React.Component {
  handleButtonClick = () => console.log("onClick from Class");
  render() {
    return (
      <React.Fragment>
        <h2>Test: class | render() | return(...)</h2>
        <p>{ this.props.content } "in class"</p>
        <button onClick={this.handleButtonClick}>Class</button>
      </React.Fragment>
    );
  }
}

export default Test;

Test.propTypes = {
  content: PropTypes.string,
}