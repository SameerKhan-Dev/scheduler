
import React, {useState} from 'react';
import {useEffect} from 'react';
const axios = require('axios');

export default function useApplication (initialState) {

  const [state, setState] = useState({ 

    day: "Monday",
    days: [],
    interviewers: [],
    appointments: [
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
    ]
  });

   // updates the state object with day that is to be set
   const setDay = (day) => setState({...state, day: day});



  // updates the state object with new days info that is to be set.
  //const setDays = (days) => setState({...state, days: days });
  //const setDays = (days) => setState(prev => ({ ...prev, days}));

  // id is the appointment_id and interview is the object with name of student, and interviewer_id.
  function bookInterview(id, interview) {

    console.log(id, interview);

    // make a copy of the interview object.
    const interviewCopy = {...interview};

    // make a copy of the current appointment and modify the interview object to be the new interview object info.
    const appointment = {
      ...state.appointments[id],
      interview: {...interview}
    };
    // make a copy of the existing appointments list and update it with the new appointment object.
    const appointments = {
      ...state.appointments,
      // appointments[id] = 
      [id]: appointment
    };


   return axios
    .put(`http://localhost:8001/api/appointments/${id}`, {
      id: id,
      time: state.appointments[id].time,
      interview: {
        student: interview.student,
        interviewer: interview.interviewer,
      },
    })
    .then((response) => {
      console.log("response is: ",response);
       // call setState function to update local state value
      setState({...state, appointments: appointments});
    });
    //setState({...state, appointments: appointments});
    // alternatively could have done:  setState({...state, appointments});
    
    // make Async API put request to update database.
    
  }
    // this function is responsible for deleting the appointment in the state and the database.
    function cancelInterview(id) {
     
      // to delete an appointment means to set the interview object to null value.

      // make a copy of the current appointment and modify the interview object to be the new interview object info.
      const appointment = {
       ...state.appointments[id],
        interview: null
      };
      // make a copy of the existing appointments list and update it with the new appointment object.
      const appointments = {
       ...state.appointments,
      [id]: appointment
      };
      
      //setState({...state, appointments: appointments});
      // make an aysnc call to delete the appointment from the database.
      
      //`DELETE /api/appointments/:id`
      
      return axios
      .delete(`http://localhost:8001/api/appointments/${id}`)
      .then((response) => {
        console.log("response is: ",response);
         // call setState function to update local state value of appoinments after the api call is made / database is modified.
        setState({...state, appointments: appointments});
      });

    }

  useEffect(() => {

    Promise.all([
      axios.get("http://localhost:8001/api/days"),
      axios.get("http://localhost:8001/api/appointments"),
      axios.get("http://localhost:8001/api/interviewers")
  
    ])
    .then ((allValues) => {
  
      //console.log(allValues[0]); // first
      //console.log(allValues[1]); // second
      //console.log(allValues[2]); // third
  
      let daysData = allValues[0].data;
      let appointmentsData = allValues[1].data;
      let interviewersData = allValues[2].data;
      console.log("interviewersData is : ", interviewersData);
      //const [first, second, third] = all;
      console.log("ALL VALUES IS: ", allValues);
      setState(prev => ({...prev, days: daysData, appointments: appointmentsData, interviewers: interviewersData}));
      console.log("state.interviewers is : ", state.interviewers);
    });
    //console.log("state.interviewers is : ", state.interviewers);
    /*
    axios.get("http://localhost:8001/api/days")
      .then(response => {
        console.log("response.data is: ",response.data);
        setDays(response.data);
      });

    */
  },[]);


  return ({
    state: state,
    setDay: setDay,
    bookInterview: bookInterview,
    cancelInterview: cancelInterview
  });
} 
