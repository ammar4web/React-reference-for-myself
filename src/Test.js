import React from "react";
import PropTypes from "prop-types";

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

Test.propTypes = {
  content: PropTypes.string,
}