import React from "react";
import { Placeholder, Table } from "react-bootstrap";

const PlaceholderLoading = () => {
  const numRows = 3; // Number of rows
  const numCols = 4; // Number of columns

  const generatePlaceholders = (count) => {
    return Array.from({ length: count }, (_, index) => (
      <Placeholder key={index} animation="glow">
        <Placeholder xs={6} bg="secondary" size="xs" />
      </Placeholder>
    ));
  };

  const generateRow = () => {
    return (
      <tr>
        {generatePlaceholders(numCols).map((placeholder, index) => (
          <td key={index}>{placeholder}</td>
        ))}
      </tr>
    );
  };

  const tableHeaders = generatePlaceholders(numCols).map(
    (placeholder, index) => <th key={index}>{placeholder}</th>
  );

  const tableRows = Array.from({ length: numRows }, (_, index) => (
    <React.Fragment key={index}>{generateRow()}</React.Fragment>
  ));

  return (
    <>
      <Table striped>
        <thead>
          <tr>{tableHeaders}</tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </Table>
    </>
  );
};

export default PlaceholderLoading;
