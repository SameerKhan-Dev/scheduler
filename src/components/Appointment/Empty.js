import React from 'react';

// This component is for empty / open appointment time slots.

function Empty(props) { 
  
  const {onAdd} = props;

  return (
      <main className="appointment__add">
        <img
          className="appointment__add-button"
          src="images/add.png"
          alt="Add"
          onClick={event => onAdd()}
        />
      </main>
    );
  }
export default Empty;
