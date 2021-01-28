import React from 'react';
import InterviewerListItem from 'components/InterviewerListItem';
import './InterviewerList.scss';
import PropTypes from 'prop-types';

// Component to display list of available interviewers inside the Form component when creating/editing appointments.
const InterviewerList = function (props) {

  const {interviewers, value , onChange} = props;

  // Create array of each interviewer as a react component (InterviewerListItem).
  const listOfInterviewers = interviewers.map(eachInterviewer => {

    return (
      <InterviewerListItem
        key= {eachInterviewer.id}
        name= {eachInterviewer.name} 
        avatar= {eachInterviewer.avatar}
        selected= {value === eachInterviewer.id}
        setInterviewer= {event => (onChange(eachInterviewer.id))}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header">Interviewer</h4>
      <ul className="interviewers__list">
        {listOfInterviewers}
      </ul>
    </section>
  );
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired

}

export default InterviewerList;