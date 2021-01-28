import React from 'react';

// This component is used to display error messages when deleting or saving operation fails.

function Error(props) {
  const {message, onClose} = props;
  
  return (
    <main className="appointment__card appointment__card--error">
      <section className="appointment__error-message">
        <h1 className="text--semi-bold">Error</h1>
        <h3 className="text--light">{message}</h3>
      </section>
      <img
        className="appointment__error-close"
        src="images/close.png"
        alt="Close"
        onClick={event => onClose()}
      />
    </main>
  );
}

export default Error;