
import React, {useState} from 'react';
import {useEffect} from 'react';

export default function useVisualMode (initialMode) {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);

  // transition function
  /*
  function transition (newMode){
    setHistory(mode);
    setMode(prev => {
      setHistory(prev);
      return newMode;
    });
  }
  */
  function transition (newMode, replace = false) {
    
    if(replace === true) {
      // i.e replace the mode in history with new mode.

      setHistory(prev => [...prev.slice(0, (prev.length-1)), newMode]);
      setMode(newMode);

    } else {
      setHistory(prev => [...prev, newMode]);
      setMode(newMode);
    }
    //console.log("History is: ", history);
  }

  function back (){
    if (history.length > 1) {
      const prevMode = history[history.length-2];
      setHistory(prev=>prev.slice(0, prev.length-1));
      setMode(prevMode);
    }
    //setMode(history[(history.length)-1]);
    /*
    setMode(history[(history.length)-2]);
    setHistory(history.slice(0, history.length-1));
    */
    //setMode(history[(history.length)-1]);
    /*
    Promise.resolve(setHistory(history.slice(0, history.length-1)))
    .then( 
      setMode(history[(history.length)-1])
    );
    */
    //setHistory(history.slice(0, history.length-1));
  }
 // console.log("History is: ", history);
  return ({
    mode: mode,
    transition: transition,
    back: back
  });
} 
