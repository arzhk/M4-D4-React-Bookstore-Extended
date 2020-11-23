import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default class NavBar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link" onClick={() => this.props.changeMode()}>
              Default Mode
            </Nav.Link>
            <Nav.Link href="#link" onClick={() => this.props.changeMode()}>
              Stacked Mode
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
