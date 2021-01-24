
export default function getAppointmentsForDay(state, day) {

  //... returns an array of appointments for that day
  
  // store all appointment ids, where day-name is Monday
  // get all the appointment objects matching id and add to array,
  // return that array as the answer
  let result = [];
    // check if days is not empty
    if(state.days.length !== 0) {
      // check if day is found inside the days array of object
      let dayArray = state.days.filter(eachDay => {
        return (eachDay.name === day);    
      });
      // check if day was found
      if (dayArray.length > 0) {
        //extract the appointment ids for that day
        // search for that appointment inside the appointments list
        // of objects and add it to the results array
        let appointment_ids = dayArray[0].appointments;
        console.log("appointment_ids is: ", appointment_ids);
        if (appointment_ids.length > 0) {
          
          for (const key in state.appointments) {
            //console.log("appointmentObject is: ", appointmentObject)
            if(appointment_ids.includes(state.appointments[key].id)){

              result.push(state.appointments[key]);
            }
            //allAppointments.push(appointmentObject);

          }
          
          //console.log("result here is: ", result);
         //console.log("allAppointments is: ", allAppointments);
 
        }
      }  
    }  
    //console.log("Output is ,", result);
    return result;
  // corner cases, if days is empty, then return empty array,
  // or if day is not found return an empty array.
}

/*
const state = {
  days: [
    {
      id: 1,
      name: "Monday",
      appointments: [1, 2, 3]
    },
    {
      id: 2,
      name: "Tuesday",
      appointments: [4, 5]
    }
  ],
  appointments: {
    "1": { id: 1, time: "12pm", interview: null },
    "2": { id: 2, time: "1pm", interview: null },
    "3": {
      id: 3,
      time: "2pm",
      interview: { student: "Archie Cohen", interviewer: 2 }
    },
    "4": { id: 4, time: "3pm", interview: null },
    "5": {
      id: 5,
      time: "4pm",
      interview: { student: "Chad Takahashi", interviewer: 2 }
    }
  }
};

getAppointmentsForDay(state, "Tuesday");
*/