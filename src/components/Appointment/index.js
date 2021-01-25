import React, {Fragment} from 'react';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
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


function Appointment(props) {
  
  const {mode, transition, back} = useVisualMode(props.interview === null ? EMPTY : SHOW);  
  
  
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
     {mode === EMPTY && <Empty onAdd={() => transition("CREATE")} />}
     {mode === SHOW && (
      <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer}
      />
     )}
       
     {mode === CREATE && (
        <Form 
          interviewers= {props.interviewers}
          //onSave={transition}
          onCancel={back}
        //onEdit={transition}
        //onDelete={transition}
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