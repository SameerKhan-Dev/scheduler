import React, {Fragment} from 'react';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import './styles.scss';
var classNames = require('classnames');
/*
function Show(props) {

  const {student, interviewer, onEdit, onDelete} = props;

  From Stories: 
interview={{student: "Lydia Miller-Jones", interviewer}}
*/
function Appointment(props) {
  /*
  let appointmentClasses = classNames(
    {
      'appointment': true,
      ':last-of-type': (props.id === "last") 
    }
  );
  */
  return (
    <article className="appointment">
      <Header
        time={props.time}
      /> 
      <Fragment>
        {props.interview ? 
        <Show 
          student={props.interview.student} 
          interviewer={props.interview.interviewer}
        />  : 
        <Empty/> }
      </Fragment>
    </article>
  );
}
export default Appointment;
/*
<Fragment>
{props.interview ? 

  <Show
    student={props.interview.student}
    interviewer={props.interview.interviewer}
  /> : 
  <Empty/>}
</Fragment>

    <article className='appointment'>
      <Header
        time={props.time}
      />
    </article>
*/