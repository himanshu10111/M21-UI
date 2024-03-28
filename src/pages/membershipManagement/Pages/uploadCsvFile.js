import React, { useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { NotifySuccess, NotifyError } from "../../../component/toast/Toast";

const UploadCsvFile = (props) => {
  const BaseURL = process.env.REACT_APP_BASE_URL;

  const [selectedFiles, setSelectedFiles] = useState(null);

  //toast handeler
  const [toastShowhandler, setTaostShowHandler] = useState(true);

  //failer toast handler
  const [toastFailerHandler, setToastfailerHandler] = useState(true);
  //API failer response message holder
  const [apiFailerResponseHolder, setApiResponseFailerHolder] = useState("");

  //Toast header message holder
  const [toastHeaderMessage, setToasrHeaderMessage] = useState("");

  const [showAutohideExample, setShowAutohideExample] = useState(false);
  //API success response message holder
  const [apiResponseHolder, setApiResponseHolder] = useState("");

  // Create a ref for the file input element
  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  //response holder

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //Toast hide show dealy
    setShowAutohideExample(true);
    setTimeout(() => {
      setShowAutohideExample(false);
    }, 3000);

    // console.log("Uplaod file button click");
    if (selectedFiles) {
      const uploadRawformData = new FormData();
      for (const file of selectedFiles) {
        uploadRawformData.append("file", file);
        console.log("type of file", file);
      }

      try {
        const response = await fetch(`${BaseURL}/api/members/upload`, {
          method: "POST",
          body: uploadRawformData,
          //   headers: {
          //     "Content-Type": "text/csv",

          //     "Access-Control-Allow-Origin": "*",
          //   },
        }).then((res) => {
          const statusCode = res.status;
          // const statusError = res.error;
          // console.log("got error for blank entry", statusError);
          res.json().then((data) => {
            if (statusCode === 400) {
              setToastfailerHandler(false);
              setApiResponseFailerHolder("Bad request", statusCode);
              setToasrHeaderMessage("CSV file upload");
              // console.log("Error message from response", statusError);
              console.log("file had not upload", statusCode);
              setTaostShowHandler(true);
            } else if (statusCode === 200) {
              setTaostShowHandler(false);
              setToastfailerHandler(true);
              setToasrHeaderMessage("CSV file upload");
              setApiResponseHolder(data.message);
              console.log("this response messaege", data.message);
              formRef.current.reset();
            }
          });
        });
      } catch (error) {
        // Handle network or other errors.
        console.error("Upload error", error);
      }
    } else if (!selectedFiles) {
      // Handle case when no files are selected.
      console.log("No files selected ");
      setTaostShowHandler(true);
      setToastfailerHandler(false);
      setApiResponseFailerHolder("Bad request");
      setToasrHeaderMessage("CSV file upload");
    }

    // inputfield clear
    fileInputRef.current.value = "";
  };

  return (
    <>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Col>
          <Col sm="12" className="position-fixed">
            <Row>
              <Col sm="6">&nbsp;</Col>
              <Col sm="6">
                {!toastShowhandler && (
                  <NotifySuccess
                    show={showAutohideExample}
                    setShow={setShowAutohideExample}
                    toastHeaderMessage={toastHeaderMessage}
                    apiResponseHolder={apiResponseHolder}
                  />
                )}
                {!toastFailerHandler && (
                  <NotifyError
                    showError={showAutohideExample}
                    setShowError={setShowAutohideExample}
                    toastHeaderMessage={toastHeaderMessage}
                    apiFailerResponseHolder={apiFailerResponseHolder}
                  />
                )}
              </Col>
            </Row>
          </Col>
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Multiple files input example</Form.Label>
            <Form.Control
              type="file"
              accept=".csv"
              placeholder="Upload the file"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
          </Form.Group>
        </Col>
        <Col>
          <Button type="submit">Upload Files</Button>
        </Col>
      </Form>
    </>
  );
};

export default UploadCsvFile;
