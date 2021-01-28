import React, {useState} from 'react';
import InterviewerList from 'components/InterviewerList';
import Button from 'components/Button';

// This component is the form shown to users when creating a new appointment or editing an existing one.

function Form(props) {

  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const {interviewers, onSave, onCancel, onInvalidInput, isCreate} = props;

 // Reset function to clear the values in the form, i.e resets to a brand new form
  const reset = function () {
  
    setName("");
    setInterviewer(null);
  }

  // Cancel function to handle initiation of cancelling of an appointment and reseting the values.
  const cancel = function () {
    
    onCancel(); 
    reset();
  }
 
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
            onChange={event => setName(event.target.value)}
          />
        </form>
        <InterviewerList interviewers={interviewers} value={interviewer} onChange={setInterviewer} />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={cancel} danger>Cancel</Button>
          <Button onClick={event=> (name === "" || interviewer ===null) ? onInvalidInput() : onSave(name, interviewer, isCreate)} confirm>Save</Button>
        </section>
      </section>
  </main>

  );
}

export default Form;