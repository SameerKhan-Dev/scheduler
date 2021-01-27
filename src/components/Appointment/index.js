import React, {Fragment} from 'react';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';

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


function Appointment(props) {
  
  const {mode, transition, back} = useVisualMode(props.interview === null ? EMPTY : SHOW);  
  
  // this function will be used to save the interview details into state.
  function save(name, interviewer) {

    const interview = {
      student: name,
      interviewer: interviewer
    }

    transition("SAVING");
    // book interview with details
    props.bookInterview(props.id, interview).then(() => {

      transition("SHOW");
      
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
      transition("DELETING")
    
    // call aysnc props function deleteAppointment
    props.cancelInterview(props.id).then((response) => {

      // transition to empty once deleted
      transition("EMPTY")
    });

    
  }

  function confirmDelete() {
    //alert("INSIDE CONFIRM DELETE");
    //setTimeout(function(){  transition("CONFIRM");}, 3000);
    transition("CONFIRM");

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
        //deleteAppointment={deleteAppointment}
        onDelete={confirmDelete}
      />
     )}
       
     {mode === CREATE && (
        <Form 
          interviewers= {props.interviewers}
          //onSave={transition}
          onSave={save}
          onCancel={back}
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