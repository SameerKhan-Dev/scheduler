
// This function gets interview details with student and interviewer information.
function getInterview(state, interview) {

  if (interview === null) {
    return null;
  }
  
  let result = {};
  result.student = interview.student;

  let interviewer_id = interview.interviewer;

  let interviewerObject = state.interviewers[interviewer_id];

  result.interviewer = {
    id: interviewer_id,
    name: interviewerObject.name,
    avatar: interviewerObject.avatar
  }
   return result;
}

//This function returns an array of appointments for that day
function getAppointmentsForDay(state, day) {

  let result = [];

  if(state.days.length !== 0) {
    // check if day is found inside the days array of object
    let dayArray = state.days.filter(eachDay => {
      return (eachDay.name === day);    
    });

    if (dayArray.length > 0) {
      // search for that appointment inside the appointments list
      let appointment_ids = dayArray[0].appointments;

      if (appointment_ids.length > 0) {
          
        for (const key in state.appointments) {
          if(appointment_ids.includes(state.appointments[key].id)) {

            result.push(state.appointments[key]);
          }
        }
      }
    }  
  }  
    return result;
}

//This function returns all available interviewers for given day.
function getInterviewersForDay(state, day) {
  
  let result = [];

  if(state.days.length !== 0) {
    // check if day is found inside the days array of object
    let dayArray = state.days.filter(eachDay => {
      return (eachDay.name === day);    
    });

    if (dayArray.length > 0) {
      // search for the interviewer inside the interviewers list
      // of objects and add it to the results array
      let interviewers_ids = dayArray[0].interviewers;

      if (interviewers_ids.length > 0) {
          
        for (const idKey in state.interviewers) {

          if(interviewers_ids.includes(state.interviewers[idKey].id)){

            result.push(state.interviewers[idKey]);
          }
        } 
      }
    }  
  }  
  return result;
}

const helpers = {
  getInterview,
  getAppointmentsForDay,
  getInterviewersForDay
}

export default helpers;
