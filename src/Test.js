import React from "react";
import PropTypes from "prop-types";

// class Test extends React.Component { render() {return ();} }
// <React.Fragment></React.Fragment> }

// { this.props.___ }

class Test extends React.Component {
  
  // 
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }
  // 

  // 
  // render(){} ينفذ هذا التابع بعد  تنفيذ التابع
  // componentDidMount(){} ينفذ هذا التابع بعد  تنفيذ التابع
  // هذا التابع يستطيع ااستخدام الدالة
  // setState()
  // State وتغير حالة المكون
  componentDidUpdate() {
    if (this.state.counter === 10){
      console.log("لقد نقرت على الزر 10 مرات")
    }
    console.log("componentDidUpdate() runs after render(){} and after componentDidMount()")
  }
  // 

  // 
  // render(){} ينفذ هذا التابع مباشرة بعد  تنفيذ التابع
  // هذا التابع يستطيع ااستخدام الدالة
  // setState()
  // State وتغير حالة المكون
  componentDidMount() {
    console.log("componentDidMount() runs after render(){}")
  }
  // 

  // 
  // للاطلاع فقط
  // componentWillMount() {}
  // render(){} ينفذ هذا التابع قبل لحظات من تنفيذ التابع
  // لم يعد يستخدم حاليا كما تم استبداله بتابع آخر
  // 

  handleButtonClick = () => console.log("onClick from Class");
  // 
  render() {
    console.log("render(){}")
    return (
      <React.Fragment>
        <h2>Test: class | render() | return(...)</h2>
        <p>{ this.props.content } "in class"</p>
        <button onClick={this.handleButtonClick}>Class</button>
        
        {/*  */}
        <p>{this.state.counter}</p>
        <button onClick={() => this.setState({counter: this.state.counter + 1})}>+1</button>
        {/*  */}
      
      </React.Fragment>
    );
  }
}

export default Test;

Test.propTypes = {
  content: PropTypes.string,
}