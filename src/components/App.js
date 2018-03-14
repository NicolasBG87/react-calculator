import React, { Component } from 'react';
import classes from './App.css';
import Display from './Display/Display';
import Calculator from './Calculator/Calculator';

class App extends Component {
  state = {
    isOn: false,
    userInput: "",
    result: "0"
  }

  clickHandler = (e) => {
    const button = e.target.textContent;
    let userInput = this.state.userInput;

    if (button === "ON") {
      this.setState({ isOn: true });
    } else if (button === "OFF") {
      this.setState({ 
        isOn: false,
        userInput: "",
        result: "0" });
    } else if (button === "AC") {
      this.setState({
        userInput: "",
        result: "0"
      });
    } else if (button === "=") {
      this.setState({
        userInput: eval(this.state.userInput),
        result: eval(this.state.userInput)
      });
    } else {
      this.setState({
        userInput: userInput += button
      });
    }
  }
  render() {
    return (
      <div className={classes.Wrapper}>
        <div className={classes.App}>
          <h1 className={classes.Title}>CASIO</h1>
          <Display data={this.state} />
          <Calculator click={this.clickHandler} data={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
