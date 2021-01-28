import React from "react";
import 'components/DayListItem';
import DayListItem from "components/DayListItem";

// This component list every day with the number of appointments in that day.
function DayList(props) {
  
  const {days, day, setDay } = props;

  const dayList = days.map((currentDay) => {
    
    return (
      <DayListItem
        key = {currentDay.id} 
        name = {currentDay.name}
        spots ={currentDay.spots}
        setDay = {setDay}
        selected = {currentDay.name === day}
      />
    );
  });

  return dayList;
}

export default DayList;

