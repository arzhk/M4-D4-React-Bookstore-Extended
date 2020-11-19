import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Row, Col, Container } from "react-bootstrap";

import WarningSign from "./components/WarningSign/WarningSign";
import MyBadge from "./components/MyBadge/MyBadge";
import BookList from "./components/BookList/BookList";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <WarningSign text="Wow, prop text, react is amazing!" subText="This is some subtext" />

      <Container>
        <MyBadge color="primary" text="Wow, amazing!" />
        <Row>
          <BookList />
        </Row>
      </Container>
    </>
  );
}

export default App;
