import React, {useState} from "react";
import {useEffect} from "react";
import "components/Application.scss";

import DayList from "./DayList";
import Appointment from "./Appointment";
import Footer from "./Appointment/Footer";
//import {getInterview, getAppointmentsForDay} from "../helpers/selectors";
//import getAppointmentsForDay from "../helpers/selectors";

import helpers from "../helpers/selectors";
import useApplicationData from './hooks/useApplicationData';
const {getInterview, getAppointmentsForDay, getInterviewersForDay} = helpers;


// Mock data (eventually we will get this data from an API).
/*
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
*/
// Mock data for appointments, will replace with API data later on.

export default function Application(props) { 

  //const [day, setDay] = useState("Monday");
  //const [days, setDays] = useState([]);


  const {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  } = useApplicationData();


 
  
  console.log("state.days is: ", state.days);
 
  const dailyAppointments = helpers.getAppointmentsForDay(state, state.day);
  console.log("dailyAppointments is: ", dailyAppointments);
  const interviewers = getInterviewersForDay(state, state.day);
  console.log("interviewers is :", interviewers);
  



  const appointmentsList = dailyAppointments.map((eachAppointment) => {
    //const interview = helpers.getInterview(state, eachAppointment.interview)
    return (
      <Appointment
         key= {eachAppointment.id}
         id={eachAppointment.id}
         time={eachAppointment.time}
         //{...eachAppointment}
         interviewers={interviewers}
         interview={eachAppointment.interview}
         bookInterview = {bookInterview}
         cancelInterview = {cancelInterview}
         //interviewWithName = {getInterview(state, eachAppointment.interview)}
      />
    );
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
            className="sidebar--centered"
            src="images/logo.png"
            alt="Interview Scheduler"
          />
          <hr className="sidebar__separator sidebar--centered" />         
        
          <nav className="sidebar__menu">'

              <DayList
                days = {state.days}
                day = {state.day}
                setDay = {setDay}
              />
          </nav>
          <img
            className="sidebar__lhl sidebar--centered"
            src="images/lhl.png"
            alt="Lighthouse Labs"
          />
      </section>
      <section className="schedule">
        {appointmentsList}
        <Footer/>
      </section>
    </main>
  );
}
