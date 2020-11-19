import React from "react";
import { Alert } from "react-bootstrap";

export default function WarningSign({ text, subText }) {
  return (
    <Alert variant="danger">
      <Alert.Heading>{text}</Alert.Heading>
      <p className="mb-0">{subText}</p>
    </Alert>
  );
}
