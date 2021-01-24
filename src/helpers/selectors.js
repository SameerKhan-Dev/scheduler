
function getInterview(state, interview) {
  // check if interview is booked or not, i.e has a valid non-null value or not 
  if (interview === null) {
    return null;
  }
  
  // lets build the two key-value pairs

    // first lets get the student name from the interview
   
    let result = {};
    result.student = interview.student;
    
    // get the interviewer_id
    let interviewer_id = interview.interviewer;
   //console.log("interviewer_id is:", interviewer_id);

    // get the interviewer information from the state.interviewers, for interviewer with matching id: interviewer_id;
    
    // get an array of all interviewers keys / ids
    /*
    let interviewers_keys = Object.keys(state.interviewers);
    console.log("interviewers_keys is: ", interviewers_keys);
    */
    let interviewerObject = state.interviewers[interviewer_id];

    result.interviewer = {
      id: interviewer_id,
      name: interviewerObject.name,
      avatar: interviewerObject.avatar
    }
    
   //console.log("result is : ", result);
   return result;
}

function getAppointmentsForDay(state, day) {

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
const helpers = {
  getInterview,
  getAppointmentsForDay
}

export default helpers;
//export {getInterview, getAppointmentsForDay};

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
  },
  interviewers: {
    "1": {  
      "id": 1,
      "name": "Sylvia Palmer",
      "avatar": "https://i.imgur.com/LpaY82x.png"
    },
    "2": {
      id: 2,
      name: "Tori Malcolm",
      avatar: "https://i.imgur.com/Nmx0Qxo.png"
    }
  }
};

getInterview(state, state.appointments["3"].interview);


// This function will return an object that contains the interview data if it is passed an object that contains an interviewer.
/*
  Expected Output:
{   
  "student": "Lydia Miller-Jones",
  "interviewer": {  
    "id": 1,
    "name": "Sylvia Palmer",
    "avatar": "https://i.imgur.com/LpaY82x.png"
  }
}

*/

// function getInterview(state, interview) { /////////////////////////////////

    // state object contains three key-value pairs : 
    // 1) the days array with day objects 2) appointments object containing objects 3) interviewers object containing objects. 
    // the state.interviewers is in format:
    /*
    {
     "1": {
          "id": 1,
          "name": "Sylvia Palmer",
          "avatar": "https://i.imgur.com/LpaY82x.png"
      },
     "2": {
          "id": 2,
          "name": "Tori Malcolm",
          "avatar": "https://i.imgur.com/Nmx0Qxo.png"
      }   
    }
    
    Now the * interview * parameter is an object containing interview details from the appointment object. 

    the interview is in format:
    
       {
         "student": "Lydia Miller-Jones",
        "interviewer": 1
       }

      "interviewer is the interviewer id that we have to match.
  
      Expected Output:
{   
  "student": "Lydia Miller-Jones",
  "interviewer": {  
    "id": 1,
    "name": "Sylvia Palmer",
    "avatar": "https://i.imgur.com/LpaY82x.png"
  }
}
    */ 

