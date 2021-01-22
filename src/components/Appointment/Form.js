import React from 'react';
import InterviewerList from 'components/InterviewerList';
import Button from 'components/Button';


function Form(props) {
  
  const {name, interviewers, interviewer, onSave, onCancel, setInterviewer} = props;
  //const placeholderValue = (props.name ? props.name : "Enter Student Name");
  if (props.name === null){
    name = "";
  }
  if (props.interviewer === null) {

    interviewer = null;
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder= "Enter Student Name"
            //value = {name}
            /*
              This must be a controlled component
            */
          />
        </form>
        <InterviewerList interviewers={interviewers} value={interviewer} onChange={setInterviewer} />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={onCancel} danger>Cancel</Button>
          <Button onClick={onSave} confirm>Save</Button>
        </section>
      </section>
  </main>

  );
}

export default Form;