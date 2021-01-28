
import React, {useState} from 'react';
import {useEffect} from 'react';

// This custom hook is used to manage the state of the different modes/views/status for appointments.
export default function useVisualMode (initialMode) {

  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);

  // This function handles transitions between states/modes when user interacts with an appointment.
  function transition (newMode, replace = false) {
    
    // Used to replace the existing mode if error occurs during saving or deleting operations.
    if(replace === true) {
      setMode(newMode);

    } else {
      setHistory([...history, newMode]);
      setMode(newMode);
    }
  }

  // This function handles the back action, when a user cancels an action or wants to go back.
  function back (){
    if (history.length > 1) {
      const prevMode = history[history.length-2];
      setHistory(history.slice(0, history.length-1));
      setMode(prevMode);
    }
  }

  return ({
    mode: mode,
    transition: transition,
    back: back
  });
} 
