import React from 'react';
import classes from './Button.css';

const Button = (props) => {
  let style = {};
  switch(props.label) {
    case "ON":
      style = { color: "#689F38"};
      break;
    case "OFF":
      style = { color: "#BF360C"};
      break;
    case "0":
      style = { width: "170px", color: "#EEEEEE"};
      break;
    default:
      style = { color: "#EEEEEE"};
  }

  let button = <button onClick={props.click} style={style} className={classes.Button} >{props.label}</button>;
  if (props.isOn === false) {
    button = <button style={style} className={classes.Button} >{props.label}</button>
  }
  return (
    <React.Fragment>
      {button}
    </React.Fragment>
  );
};

export default Button;