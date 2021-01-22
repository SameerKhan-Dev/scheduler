import React from 'react';

function Header(props) {
  const {time} = props;

    return (
      <header className="appointment_time">
        <h4 className="text--semi-bold">{time}</h4>
        <hr className="appointment__separator"/>
      </header>
    );
};

export default Header; 
//style={"display:inline-block"}
//https://resume.creddle.io/resume/blr41ble0u4
//https://resume.creddle.io/resume/7vztw8ss97m