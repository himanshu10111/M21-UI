import React from "react";
import { useState } from "react";
import { Alert } from "react-bootstrap";

const FailuerAlertNotification = (props) => {
  const [dismissbleAlert, setDissmissbleAlert] = useState(1);
  const FunDissmissable = () => {
    setDissmissbleAlert();
  };
  return (
    <>
      {/* {dismissbleAlert && ( */}
      <Alert variant="danger" onClose={props.onClose} dismissible>
        {props.errorMessage}
      </Alert>
      {/* )} */}
    </>
  );
};

export default FailuerAlertNotification;
