import React, {useState} from "react";
import {useEffect} from "react";
import "components/Application.scss";

import DayList from "./DayList";
import Appointment from "./Appointment";
const axios = require('axios');
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
const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png"
      }
    }
  },
  {
    id: 3,
    time: "2pm",
    interview: {
      student: "Jack Tyler",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png"
      }
    }
  },
  {
    id: 4,
    time: "3pm",
  },
  {
    id: 5,
    time: "4pm",
    interview: {
      student: "Roy Jordan",
      interviewer: {
        id: 4,
        name: "Cohana Roy",
        avatar: "https://i.imgur.com/FK8V841.jpg",
      }
    }
  },
  {
    id: 6,
    time: "5pm"
  }
];


export default function Application(props) { 

  const [day, setDay] = useState("Monday");
  const [days, setDays] = useState([]);

  const appointmentsList = appointments.map((eachAppointment) => {

    return (
      <Appointment
         key= {eachAppointment.id}
        {...eachAppointment}
      />
    );
  });

  useEffect(() => {
    axios.get("http://localhost:8001/api/days")
      .then(response => {
        console.log("response.data is: ",response.data);
        setDays(response.data);
      });
  },[]);



  /*
    id={eachAppointment.id}
    time={eachAppointment.time}
    interview={eachAppointment.interview}
  */
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
                days = {days}
                day = {day}
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
      </section>
    </main>
  );
}
