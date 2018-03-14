import React from 'react';
import classes from './Calculator.css';
import Button from './Button/Button';

const Calculator = (props) => {
  return (
    <div className={classes.Calculator}>
      <div className={classes.Row}>
        <Button click={props.click} label="ON"/>
        <Button click={props.click} label="OFF"/>
        <Button isOn={props.data.isOn} click={props.click} label="AC"/>
        <Button isOn={props.data.isOn} click={props.click} label="/"/>
      </div>
      <div className={classes.Row}>
        <Button isOn={props.data.isOn} click={props.click} label="7"/>
        <Button isOn={props.data.isOn} click={props.click} label="8"/>
        <Button isOn={props.data.isOn} click={props.click} label="9"/>
        <Button isOn={props.data.isOn} click={props.click} label="*"/>
      </div>
      <div className={classes.Row}>
        <Button isOn={props.data.isOn} click={props.click} label="4"/>
        <Button isOn={props.data.isOn} click={props.click} label="5"/>
        <Button isOn={props.data.isOn} click={props.click} label="6"/>
        <Button isOn={props.data.isOn} click={props.click} label="-"/>
      </div>
      <div className={classes.Row}>
        <Button isOn={props.data.isOn} click={props.click} label="1"/>
        <Button isOn={props.data.isOn} click={props.click} label="2"/>
        <Button isOn={props.data.isOn} click={props.click} label="3"/>
        <Button isOn={props.data.isOn} click={props.click} label="+"/>
      </div>
      <div className={classes.Row}>
        <Button isOn={props.data.isOn} click={props.click} label="0"/>
        <Button isOn={props.data.isOn} click={props.click} label="."/>
        <Button isOn={props.data.isOn} click={props.click} label="="/>
      </div>
    </div>
  );
};

export default Calculator;