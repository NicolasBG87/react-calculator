import React from 'react';
import classes from './Display.css';

const Display = (props) => {
  let style = {};
  let result = props.data.result;
  let userInput = props.data.userInput;

  if (props.data.isOn === true) {
    style = { backgroundColor: "#1B5E20"};
    result = props.data.result;
    userInput = props.data.userInput;
  } else {
    style = { backgroundColor: "rgba(0, 0, 0, 0.7)"};
    result = "";
    userInput = "";
  }
  return (
    <div style={style} className={classes.Display}>
      <h1 className={classes.Result}>{result}</h1>
      <p className={classes.UserInput}>{userInput}</p>
    </div>
  );
};

export default Display;