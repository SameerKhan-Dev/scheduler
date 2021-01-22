import React from 'react';

import './InterviewerListItem.scss'

var classNames = require('classnames');

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

// for <li> classes that are applicable are:

// .interviewers__item--selected, .interviewers__item--

// for <img> classes that are applicable are:

// .interviewers__item-image  ,  .interviewers__item--selected-image 

export default InterviewerListItem;

/*
.interviewers {
  &__item {
    @include button-inactive--opacity;

    margin-right: 0.5rem;

    &-image {
      border-radius: 16px;
    }

    &--selected {
      color: $dark-background;
      background-color: $white;
      border-radius: 16px;
      height: 32px;
      display: flex;
      align-items: center;
      padding-left: 2px;
      padding-right: 1rem;
      user-select: none;
    }

    &--selected &-image {
      width: 28px;
      height: 28px;
      margin-right: 0.5rem;
    }

    &--selected,
    &:hover {
      @include button-active--opacity;
    }
  }
}

*/