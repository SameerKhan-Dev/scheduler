import React from "react";
import "./DayListItem.scss";

var classNames = require('classnames');

// This component is the individual DayListItem representing a day on the left nav-bar of the application.
export default function DayListItem(props) {

  // Logic to determine sentence describing number of spots remaining.
  const spotsString = "";
  const formatSpots = function (spotsString) {
    if (props.spots === 0) {
      spotsString = `no spots remaining`;

    } else if (props.spots === 1) {

      spotsString = `1 spot remaining`;
    } else {

      spotsString = `${props.spots} spots remaining`;
    }
    
    return spotsString;
  }

  let formattedSpotsString = formatSpots(spotsString);
  
  // Define classes based on values of props
  let dayClass = {
    'day-list__item': true,
    'day-list__item--selected':props.selected,
    'day-list__item--full': props.spots === 0
  }

  let componentClass = classNames(dayClass);

  return (
    <li className = {componentClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formattedSpotsString}</h3>
    </li>
  );
}