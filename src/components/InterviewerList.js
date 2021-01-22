import React from 'react';
import InterviewerListItem from 'components/InterviewerListItem';
import './InterviewerList.scss'


const InterviewerList = function (props) {

    const {interviewers, value , onChange} = props;
    // we want to return an array components (i.e array of InterviewerListItem components)
    // use map to create that array.
    
    // for each component of array , use the interviewer number and setInterviewer command.
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

export default InterviewerList;