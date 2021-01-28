import React from 'react';

// This component is the header for every appointment.
// It displays the time of the appointment and a separator between appointments.

function Header(props) {
  
  const {time} = props;

    return (
      <header className="appointment__time">
        <h4 className="text--semi-bold">{time}</h4>
        <hr className="appointment__separator"/>
      </header>
    );
};

export default Header; 
