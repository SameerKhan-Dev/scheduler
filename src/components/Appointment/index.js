import React, {Fragment} from 'react';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import Error from './Error';

//import useVisualMode from '/home/sam123/lighthouse/w7/scheduler/scheduler/src/hooks/useVisualMode';
import useVisualMode from '../hooks/useVisualMode';
import './styles.scss';
import helpers from "../../helpers/selectors";

var classNames = require('classnames');
/*
function Show(props) {

  const {student, interviewer, onEdit, onDelete} = props;

  From Stories: 
interview={{student: "Lydia Miller-Jones", interviewer}}

*/

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


function Appointment(props) {
  
  const {mode, transition, back} = useVisualMode(props.interview === null ? EMPTY : SHOW);  
  
  // this function will be used to save the interview details into state.
  function save(name, interviewer, isCreate = false) {

    const interview = {
      student: name,
      interviewer: interviewer
    }

    transition(SAVING);
    // book interview with details
    props.bookInterview(props.id, interview, isCreate).then(() => {

      transition(SHOW);
      
    }).catch((err) => {
      //console.log("HEY! There is an error in saving!");
      transition(ERROR_SAVE, true);
    });
    
    //transition("SAVING");
    // transition to the SHOW Page once interview is saved /// JUST TEMPORARY TO MAKE SURE THINGS HAVE SAVED, i.e the SHOW PAGE
 
  }

  function deleteAppointment() {

    // we need to control transition states here and also the deleteAppointment async call
    
    // transition to DELETING MODE
   
    
    
    /*
    setTimeout(function(){ alert("DELETED! ");
    transition("EMPTY");}, 3000);
    */
    
    // set state to transition state
      transition("DELETING", true)
    
    // call aysnc props function deleteAppointment
    props.cancelInterview(props.id).then((response) => {

      // transition to empty once deleted
      transition("EMPTY")
    }).catch((err) => {
      console.log("HEY! There is an error in deleting!");
      transition("ERROR_DELETE", true);
    });
  }

  function confirmDelete() {
    //alert("INSIDE CONFIRM DELETE");
    //setTimeout(function(){  transition("CONFIRM");}, 3000);
    transition("CONFIRM");

  }

  function onInvalidInput() {

    transition("ERROR_INPUT");

  }

  //interviewers={interviewers}
  //interview={eachAppointment.interview}
  function getInterviewerName (interviewers, interview) {

    let interviewer_id = interview.interviewer;

    // iterate through the interviewers object to find interviewer
    // matching the interviewer_id;
    let interviewersCopy = [...interviewers];
        
    let interviewerObject = interviewersCopy.find((person) => {
  
      return (person.id === interviewer_id);
    });
    let name = interviewerObject.name;
  
    return name;
  }
  //(function)
  // let interviewerName = getInterviewerName(props.interviewers, props.interview);
  //let interviewerName = Yoyo
  /*
  let appointmentClasses = classNames(
    {
      'appointment': true,
      ':last-of-type': (props.id === "last") 
    }
  );
  */

//if(interviewerName = props.interviewWithName.interviewer.name; //.interviewer.name;

 return (
  <article className="appointment">
    <Header
      time={props.time}
    /> 
     {mode === EMPTY && <Empty onAdd={() => transition("CREATE")} />}
     {mode === SHOW && (
      <Show
        student={props.interview.student}
        //interviewerName={interviewerName}
        interviewerName={getInterviewerName(props.interviewers, props.interview)}
        //deleteAppointment={delebteAppointment}
        onDelete={confirmDelete}
        onEdit={() => transition("EDIT")}
      />
     )}
       
     {mode === CREATE && (
        <Form 
          interviewers= {props.interviewers}
          //onSave={transition}
          onSave={save}
          onCancel={back}
          onInvalidInput = {onInvalidInput}
          isCreate = {true}
        //onEdit={transition}
        //onDelete={transition}
        />
      )}
      {mode === SAVING && <Status message={"SAVING"}/>}
      {mode === CONFIRM && (
        <Confirm 
          message= "Are you sure you want to delete?"
          //onSave={transition}
          //onSave={save}
          onCancel={back}
          //onConfirm={deleteAppointment(props.id)}
        //onEdit={transition}
          onConfirm={deleteAppointment}
        />
      )}
      {mode === DELETING && <Status message={"DELETING"}/>}
      {mode === EDIT && (
        <Form 
          interviewers= {props.interviewers}
          //onSave={transition}
          name={props.interview.student}
          onSave={save}
          onCancel={back}
          interviewer={props.interview.interviewer}
          onInvalidInput = {onInvalidInput}
          isCreate={false}
        //onEdit={transition}
        //onDelete={transition}
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
/*
  return (
    <article className="appointment">
      <Header
       time={props.time}
      /> 

 
    </article>
  );
  */
        /*

              {mode === EMPTY && (
        <Empty
            onAdd={transition}
            //onAdd={() => console.log("Clicked onAdd")}
        />
      )}
               {mode === SHOW && (
        <Show 
          student={props.interview.student} 
          interviewer={props.interview.interviewer}
        //onEdit={transition}
        //onDelete={transition}
        />
      )}

               {mode === CREATE && (
        <Form 
          interviewers= {[]}
          //onSave={transition}
          onCancel={back}
        //onEdit={transition}
        //onDelete={transition}
        />
      )}
        */


    /*
   let arrayContainingElement = [];
   
   if (mode === EMPTY) {

    arrayContainingElement.push (
       
      <Empty
      
      />
    );
   } else if (mode === SHOW) {

    arrayContainingElement.push (
      <Show 
        student={props.interview.student} 
        interviewer={props.interview.interviewer}
      />
    );
   }
   return (
    <article className="appointment">
      <Header
        time={props.time}
      /> 
      {arrayContainingElement}
    </article>
  );
    */
   /*
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
  */
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