import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "index.scss";

import Button from "components/Button";
import DayListItem from "components/DayListItem";

import DayList from "components/DayList"; 

import Application from "components/Application";

import InterviewerListItem from "components/InterviewerListItem";
import InterviewerList from "components/InterviewerList";

import Appointment from "components/Appointment";

import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Confirm from "components/Appointment/Confirm";
import Status from "components/Appointment/Status";
import Error from "components/Appointment/Error";
import Form from "components/Appointment/Form";


// Mock data for days
const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  },
];

// Mock data for the interviewer
const interviewer = {
  id: 1,
  name: "Sylvia Palmer",
  avatar: "https://i.imgur.com/LpaY82x.png"
};

// Mock data for all available interviewers
const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];


storiesOf("Button", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Base", () => <Button>Base</Button>)
  .add("Confirm", () => <Button confirm>Confirm</Button>)
  .add("Danger", () => <Button danger>Cancel</Button>)
  .add("Clickable", () => (
    <Button onClick={action("button-clicked")}>Clickable</Button>
  ))
  .add("Disabled", () => (
    <Button disabled onClick={action("button-clicked")}>
      Disabled
    </Button>
  ));



storiesOf("DayListItem", module) // Initiates StoryBook and registers our DayListItem component
    .addParameters({
 
      backgrounds: [{ name: "dark", value: "#222f3e", default: true}]
    }) // Provides the default background color for our component
    .add("Unselected", ()=> <DayListItem name="Monday" spots={5} />)
    .add("Selected" ,() => <DayListItem name = "Monday" spots={5} selected />)
    .add("Full", () => <DayListItem name = "Monday" spots = {0} />)
    .add("Clickable", () => (
    <DayListItem name = "Tuesday" setDay={action("setDay")} spots = {5} />)

);
    
storiesOf("DayList", module)
      
    .addParameters({

      backgrounds: [{ name: "dark", value: "#222f3e", default: true}]

    })
    .add("Monday", () =>{
      return(
      <DayList days={days} day={"Monday"} setDay={action("setDay")} />);
    })
    .add("Tuesday", () => {
      return(
      <DayList days={days} day={"Tuesday"} setDay={action("setDay")} />);
    })
    .add("Wednesday", ()=> {
      return(
      <DayList days={days} day={"Wednesday"} setDay={action("setDay")} />);
    });

storiesOf("Application", module)
    
    .addParameters({
      backgrounds: [{ name: "dark", value: "#222f3e", default: true}]
    })
    .add("Application", () => {

      return(

        <Application />
      )

    });



storiesOf("InterviewerListItem", module)

    .addParameters ({

      backgrounds: [{ name: "dark", value: "#222f3e", default: true}]
    })
    .add ("Not Selected", () => {

      return (
        <InterviewerListItem
          id = {interviewer.id} 
          name = {interviewer.name}
          avatar = {interviewer.avatar}
          selected = {false}
      
        />

      );

    })
    .add ("Selected", () => {

        return (
          
          <InterviewerListItem
            id = {interviewer.id} 
            name = {interviewer.name}
            avatar = {interviewer.avatar}
            selected = {true}
         
          />
        );
    })
    .add ("Clickable", () => {
      return (
        <InterviewerListItem
          //id = {interviewer.id} 
          name = {interviewer.name}
          avatar = {interviewer.avatar}
          selected = {false}
          setInterviewer={event => action("setInterviewer")(interviewer.id)}
        />
      );
    });


storiesOf("InterviewerList", module)
    .addParameters({

      backgrounds: [{ name: "dark", value: "#222f3e", default: true }]

    })
    .add("Initial", () => ( //no interviewer selected.
     
          <InterviewerList
            interviewers= {interviewers}
            onChange= {action("setInterviewer")}
          />
      
    ))
    .add("Preselected", () => ( // one of the interviewer is selected (interviewer 3 (i.e with id 3)).

      <InterviewerList
        interviewers= {interviewers}
        value= {3}
        onChange= {action("setInterviewer")}
     />
    ));


storiesOf("Appointment", module)
      .addParameters({

        backgrounds: [{ name: "white", value: "#fff", default: true }]

      })
      .add("Appointment", () => (
        
        <Appointment/>
            
      ))
      .add("Appointment with Time", () => (

          <Appointment
            time="12pm"
          /> 
      ))
      .add("Header", () => (
        <Header 
          time="12pm"
        />
      ))
      .add("Empty", () => (
          <Empty
            onAdd={action("onAdd")}
          />
      ))
      .add("Show", () => (

          <Show
            student="Lydia Miller Jones"
            interviewer={interviewer}
            onEdit={action("onEdit")}
            onDelete={action("onDelete")}
          />
      ))
      .add("Confirm", () => (

          <Confirm
            message="Delete the appointment?"
            onConfirm={action("onConfirm")}
            onCancel={action("onCancel")}
          />
      ))
      .add("Status", () => (

        <Status
          message="Deleting"  
        />

      ))
      .add("Error", () => (

        <Error
          message="Could not delete appointment"
          onClose={action("onClose")}
        /> 
      ))
      .add("Form-Edit", () => (

          <Form
            name="John Hello"
            interviewers={interviewers}
            interviewer={interviewer.id}
            onSave={action("onSave")}
            onCancel={action("onCancel")}
            //setInterviewer={action("setInterviewer")}
          />
      ))
      .add("From-Create", () => (
        
        <Form
          //name="John Hello"
          //interviewer={interviewer.id}
          interviewers={interviewers}
          onSave={action("onSave")}
          onCancel={action("onCancel")}
          //setInterviewer={action("setInterviewer")}
        />
      
      ))
      .add("Appointment Empty", () => (

        <Fragment>
          <Appointment 
            id={1} 
            time="12pm"
          />
          <Appointment 
            id="last"
            time="1pm"
          />
        </Fragment>
      ))
      .add("Appointment Show", () => (
      
        <Fragment>
           <Appointment 
              id={1}
              time="12pm"
              interview={{student: "Lydia Miller-Jones", interviewer}}
           />
          <Appointment 
              id={2}
              time="12:30pm"
              interview={{student: "John Doe", interviewer}}
          />
           <Appointment 
              id= "last"
              time="1pm"
              interview={false}
           />
        </Fragment>
      ));
     