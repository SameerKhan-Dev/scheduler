import React from "react";
import "./DayListItem.scss";

var classNames = require('classnames');

/*
export default function DayListItem(props) {

  if(props.setDay){
    return (
    <li onClick={props.setDay}>
      <h2 className="text--regular">{props.name}</h2>.
      <h3 className= "text--light">{props.spots} spots remaining</h3>
    </li>

  ) }
   else {
  
    return (
      <li>
        <h2 className="text--regular">{props.name}</h2>.
        <h3 className= "text--light">{props.spots} spots remaining</h3>
      </li>
    );
  }

}
*/



export default function DayListItem(props) {

  //let componentClass = classNames('day-list__item', {'day-list__item--full': props.spots === 0}, {'day-list__item--selected': props.setDay});

  let dayClass = {
    'day-list__item': true,
    'day-list__item--selected':props.selected,
    'day-list__item--full': props.spots === 0
  }

  let componentClass = classNames(dayClass);

  return (
    <li className = {componentClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{props.spots}</h3>
    </li>
  );
}