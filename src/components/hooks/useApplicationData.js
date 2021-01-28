
import React, {useState} from 'react';
import {useEffect} from 'react';
const axios = require('axios');


// This custom hook handles all the state management for application.js.
// Specifically it handles whenever the state has to be changed i.e when cancelling or editing an appointment.

export default function useApplication (initialState) {

  const [state, setState] = useState({ 

    day: "Monday",
    days: [],
    interviewers: [],
    appointments: []
  });

   const setDay = (day) => setState({...state, day: day});

 // This function is responsible for updating state and api , with newly created appointment details.
  function bookInterview(id, interview, isCreate = false) {

    console.log(id, interview);
    
    // dayId is used represent which day the newly booked appointment belongs to.
    let dayId =0;

    const interviewCopy = {...interview};

    const appointment = {
      ...state.appointments[id],
      interview: {...interview}
    };

    const daysArray = [...state.days];


    // In order to update count for the number of open appointment slots available, the isCreate variable is used.
    // We only update count when a new interview is created (isCreate = true), not when an existing interview is being updated/modified/edited. 
 
    if(isCreate) {  
      if(id <= 5) { 
        dayId = 1;      
      } else if (id <= 10) {
        dayId = 2;
      } else if (id <= 15) {
        dayId = 3;
      } else if (id <= 20) {
        dayId = 4;
      } else if (id <= 25) {
        dayId = 5;
      }  
      // when a new appointment is booked for the day, the count of available decreases by 1.
      daysArray[dayId-1].spots -= 1;
    }
  
    const appointments = {...state.appointments,[id]: appointment};

    return axios
      .put(`/api/appointments/${id}`, {
        id: id,
        time: state.appointments[id].time,
        interview: {
          student: interview.student,
          interviewer: interview.interviewer,
        },
      })
      .then((response) => {
  
        setState({...state, appointments: appointments, days: daysArray});

      });
  }
    // This function is responsible for deleting the appointment in the state and the database.
    function cancelInterview(id) {
      let dayId =0;
        // Using appointment id to determine what day appointment belongs to.
        // dayId will be used to updated count of open appointment spots available for the day.
        if(id <= 5) { 
          dayId = 1;      
        } else if (id <= 10) {
          dayId = 2;
        } else if (id <= 15) {
          dayId = 3;
        } else if (id <= 20) {
          dayId = 4;
        } else if (id <= 25) {
          dayId = 5;
        }
      
        const daysArray = [...state.days];
        daysArray[dayId-1].spots += 1;
   
        const appointment = {...state.appointments[id], interview: null};

        const appointments = {...state.appointments, [id]: appointment};
      
        // Delete appointment in API.
        return axios
          .delete(`/api/appointments/${id}`)
          .then((response) => {
            // Local state update.
            setState({...state, appointments: appointments, days: daysArray});
           });

    }

  // This useEffect hook is used to get all the initial API data for the scheduler app, when it loads the first time.
  useEffect(() => {

    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
  
    ])
    .then ((allValues) => {

      let daysData = allValues[0].data;
      let appointmentsData = allValues[1].data;
      let interviewersData = allValues[2].data;
      // Update local state with data from API.
      setState(prev => ({...prev, days: daysData, appointments: appointmentsData, interviewers: interviewersData}));
      console.log("state.interviewers is : ", state.interviewers);
    });

  },[]);
  
  return ({
    state: state,
    setDay: setDay,
    bookInterview: bookInterview,
    cancelInterview: cancelInterview,
  });
} 
