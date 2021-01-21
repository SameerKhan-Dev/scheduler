import React from "react";

import 'components/DayListItem';
import DayListItem from "components/DayListItem";

function DayList(props) {
  // equivalent to : days = props.days , day = props.day , setDay = props.setDay;
  const {days, day, setDay} = props;

  const dayList = days.map((currentDay) => {
    return (
    <DayListItem
        key = {currentDay.id} 
        name = {currentDay.name}
        spots ={currentDay.spots}
        setDay = {setDay}
        selected = {currentDay.name === day}
    />);
  
  });

  return dayList;
}

export default DayList;

