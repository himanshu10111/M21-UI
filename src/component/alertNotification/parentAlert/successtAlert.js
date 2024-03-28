import React from "react";
import { useState } from "react";
import { Alert } from "react-bootstrap";

const AlertNotificationSuccess = (props) => {
  const [closeAlert, setCloseAlert] = useState(1);
  const Dismissible = () => {
    setCloseAlert();
  };
  return (
    <>
      {/* {closeAlert && ( */}
      <Alert variant="success" onClose={props.onClose} dismissible>
        {props.errorMessage}
      </Alert>
      {/* )} */}
    </>
  );
};

export default AlertNotificationSuccess;
