import React, {useState} from 'react';
import InterviewerList from 'components/InterviewerList';
import Button from 'components/Button';


function Form(props) {

  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);


  const {interviewers, onSave, onCancel} = props;
  //const placeholderValue = (props.name ? props.name : "Enter Student Name");
  /*if (props.name === null){
    name = "";
  }
  */
  /*
  if (props.interviewer === null) {
    interviewer = null;
  }
  */
 // reset function to clear the values in the form, i.e resets to a brand new form
  const reset = function () {
    // set the name value to empty ""
    setName("");
    // set the interviewer to null
    setInterviewer(null);
  }

  const cancel = function () {
    // call the onCancel function, i.e when a user cancels operation to edit or create.
    onCancel(); // props.onCancel();
    // reset the values
    reset();
  }
  /*
  // name is name of student, interviewer is the interviewer id.
  // this page re-renders everytime name is changed or interviewer is changed so,
  // so this means that interview object is subject to change, i.e tracks/holds
  // the most recent value of the name and interviewer states/variables.
  let interview = {
    name: name,
    interviewer: interviewer 
  }
  */
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form onSubmit={event => event.preventDefault()} autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder= "Enter Student Name"
            value = {name}
            /*
              This must be a controlled component
            */
            onChange={event => setName(event.target.value)}
          />
        </form>
        <InterviewerList interviewers={interviewers} value={interviewer} onChange={setInterviewer} />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={cancel} danger>Cancel</Button>
          <Button onClick={event=> onSave(name, interviewer)} confirm>Save</Button>
        </section>
      </section>
  </main>

  );
}

export default Form;