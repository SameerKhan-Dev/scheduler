import React from "react";
import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";
import Footer from "./Appointment/Footer";
import helpers from "../helpers/selectors";
import useApplicationData from './hooks/useApplicationData';
const {getInterview, getAppointmentsForDay, getInterviewersForDay} = helpers;

// This component is the main component for the entire application showing the entire 1-page application features.

export default function Application(props) { 

  // Store latest state data imported from useApplicationData custom hook.
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  } = useApplicationData();
  
  const dailyAppointments = helpers.getAppointmentsForDay(state, state.day);

  const interviewers = getInterviewersForDay(state, state.day);
  
  // Create list of appointments as array of React components.
  const appointmentsList = dailyAppointments.map((eachAppointment) => {

    return (
      <Appointment
         key= {eachAppointment.id}
         id={eachAppointment.id}
         time={eachAppointment.time}
         interviewers={interviewers}
         interview={eachAppointment.interview}
         bookInterview = {bookInterview}
         cancelInterview = {cancelInterview}
      />
    );
  });
  // Render the Daylist component and all Appointments.
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
