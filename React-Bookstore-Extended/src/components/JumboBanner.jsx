import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

function JumboBanner() {
  return (
    <Jumbotron>
      <h1>Strive Books</h1>
      <p>Welcome to the store.</p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  );
}

export default JumboBanner;
