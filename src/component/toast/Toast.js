import React from "react";
import { Toast, ToastBody, ToastHeader } from "react-bootstrap";
import { useState } from "react";

export const NotifyError = ({
  showError,
  setShowError,
  apiFailerResponseHolder,
  toastHeaderMessage,
}) => {
  const [showA, setShowA] = useState(false);
  return (
    <>
      <Toast
        className="bg-danger"
        onClose={() => setShowError(false)}
        show={showError}
        delay={3000}
        autohide
      >
        {" "}
        <ToastHeader>{toastHeaderMessage}</ToastHeader>
        <ToastBody className="text-white">{apiFailerResponseHolder}</ToastBody>
      </Toast>
    </>
  );
};

export const NotifySuccess = ({
  show,
  setShow,
  apiResponseHolder,
  toastHeaderMessage,
}) => {
  const [showA, setShowA] = useState(false);
  return (
    <>
      <Toast
        className="bg-success"
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
        position="top-end"
      >
        <ToastHeader>{toastHeaderMessage}</ToastHeader>
        <ToastBody className="text-white">{apiResponseHolder}</ToastBody>
      </Toast>
    </>
  );
};
