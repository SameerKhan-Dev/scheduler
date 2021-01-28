import React from 'react';
import './InterviewerListItem.scss'
var classNames = require('classnames');


// This component is for displaying each individual interviewer and their name when selected.
const InterviewerListItem = function (props) {

  const {key, name, avatar, selected, setInterviewer} = props;

  const classesForLi = classNames(
    {
      'interviewers__item': true,
      'interviewers__item--selected': selected
    }
  );

  const classesForImg = classNames (
    {
      'interviewers__item-image': true,
      'interviewers__item--selected-image': true,
    }
  );
  
  return (
    <li className ={classesForLi}>
      <img 
        className = {classesForImg}
        src = {avatar}
        alt = {name}
        selected = {selected}
        onClick = {setInterviewer}
      />
        {//selected ? name : ""
          props.selected && props.name }
        
    </li>
  );
}

export default InterviewerListItem;
