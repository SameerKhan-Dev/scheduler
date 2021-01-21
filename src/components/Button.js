import React from "react";
import "components/Button.scss";


var classNames = require('classnames');


export default function Button(props) {
   
   let buttonClass = classNames('button', {'button--confirm': props.confirm}, {'button--danger': props.danger});
   /*
   let buttonClass = "button";
   
   if (props.confirm) {

      buttonClass += " button--confirm";

   } 
   if (props.danger) {

      buttonClass += " button--danger";

   }
   */
  return (
  <button

      disabled={props.disabled}
      onClick={props.onClick}
      className={buttonClass}

   >{props.children} </button>
  );
  /*
   if (props.disabled) {

       return  (<button disabled onClick={props.onClick} className={buttonClass}>{props.children}</button>);

   }
      
   return  (<button onClick={props.onClick} className={buttonClass}>{props.children}</button>);
   */
}
