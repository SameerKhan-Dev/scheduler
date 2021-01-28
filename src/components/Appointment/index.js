import React, {Fragment} from 'react';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import Error from './Error';
import helpers from "../../helpers/selectors";
import useVisualMode from '../hooks/useVisualMode';
import './styles.scss';

var classNames = require('classnames');

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const CONFIRM = "CONFIRM";
const DELETING="DELETING";
const EDIT= "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE="ERROR_DELETE";
const ERROR_INPUT="ERROR_INPUT";

// This component is used to display all the different modes for each appointment.

function Appointment(props) {
  
  const {mode, transition, back} = useVisualMode(props.interview === null ? EMPTY : SHOW);  
  
  /* This function will be used to handle the saving transition modes, 
     and to initiate an async call to the bookInterview function in application.js */
  
  function save(name, interviewer, isCreate = false) {

    const interview = {
      student: name,
      interviewer: interviewer
    }
    
    transition(SAVING);

    // Book interview with details
    props.bookInterview(props.id, interview, isCreate).then(() => {

      transition(SHOW);
      
    }).catch((err) => {

      transition(ERROR_SAVE, true);
    });

  }

  // This function is used to handle appointment mode rendering when user deletes an appointment.
  function deleteAppointment() {

      transition("DELETING", true)
    
    // Async call to initiate cancel appointment
    props.cancelInterview(props.id).then((response) => {

      transition("EMPTY")
    }).catch((err) => {

      transition("ERROR_DELETE", true);
    });
  }

  // Function to display confirm message mode when user is deleting an appointment.
  function confirmDelete() {

    transition("CONFIRM");

  }

  // Handle error display when user incorrectly fills out create/edit appointment form.
  function onInvalidInput() {

    transition("ERROR_INPUT");

  }

  // Get interviewer's name for display on each confirmed appointment.
  function getInterviewerName (interviewers, interview) {

    let interviewer_id = interview.interviewer;

    let interviewersCopy = [...interviewers];
        
    let interviewerObject = interviewersCopy.find((person) => {
  
      return (person.id === interviewer_id);
    });

    let name = interviewerObject.name;
    return name;
  }

  return (
    <article className="appointment">
      <Header
        time={props.time}
      /> 
      {mode === EMPTY && <Empty onAdd={() => transition("CREATE")} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewerName={getInterviewerName(props.interviewers, props.interview)}
          onDelete={confirmDelete}
          onEdit={() => transition("EDIT")}
        />
      )}
        
      {mode === CREATE && (
          <Form 
            interviewers= {props.interviewers}
            onSave={save}
            onCancel={back}
            onInvalidInput = {onInvalidInput}
            isCreate = {true}
          />
        )}
        {mode === SAVING && <Status message={"SAVING"}/>}
        {mode === CONFIRM && (
          <Confirm 
            message= "Are you sure you want to delete?"
            onCancel={back}
            onConfirm={deleteAppointment}
          />
        )}
        {mode === DELETING && <Status message={"DELETING"}/>}
        {mode === EDIT && (
          <Form 
            interviewers= {props.interviewers}
            name={props.interview.student}
            onSave={save}
            onCancel={back}
            interviewer={props.interview.interviewer}
            onInvalidInput = {onInvalidInput}
            isCreate={false}
          />
        )}
        {mode === ERROR_SAVE && (
          <Error
            message="Error. Could not save appointment."
            onClose={event=> back()}
          />
        )}
        {mode === ERROR_DELETE && (
          <Error
            message="Error. Could not delete appointment."
            onClose={event=> back()}
          />
        )}
        {mode === ERROR_INPUT && (
          <Error
            message="Error. Could not create appointment. Please make sure to enter a student name and select an interviewer before saving."
            onClose={event=> back()}
          />
        )}  
    </article>
 );

}

export default Appointment;
