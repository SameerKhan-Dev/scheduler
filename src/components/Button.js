import React from "react";
import "components/Button.scss";
var classNames = require('classnames');

// Basic button component for confirm, cancel, save etc.
export default function Button(props) {
   
   let buttonClass = classNames('button', {'button--confirm': props.confirm}, {'button--danger': props.danger});

  return (
   <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={buttonClass}
   >
    {props.children} 
   </button>
  );
}
