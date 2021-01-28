import React from 'react';
import Button from 'components/Button';

// This component is used to ask confirmation from user before deleting an appointment.

function Confirm(props) {

  const {message, onConfirm, onCancel} = props;

  return (
    <main className="appointment__card appointment__card--confirm">
      <h1 className="text--semi-bold">{message}</h1>
      <section className="appointment__actions">
        <Button onClick={onCancel} danger>Cancel</Button>
        <Button onClick={event => onConfirm()} danger>Confirm</Button>
      </section>  
    </main>
  );
}

export default Confirm;