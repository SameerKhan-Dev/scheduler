import React from 'react';

function Empty(props) { 
  
  const {onAdd} = props;

  return (
      <main className="appointment_add">
        <img
          className="appointment_add-button"
          src="images/add.png"
          alt="Add"
          //onClick={event => onAdd("clicked!")}
          onClick={onAdd}
        />
      </main>
    );
  }
export default Empty;
