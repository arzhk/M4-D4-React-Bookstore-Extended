import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row } from "react-bootstrap";

import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import BookList from "./components/BookList";
import NavBar from "./components/NavBar";
import StackedBookList from "./components/StackedBookList";
import JumboBanner from "./components/JumboBanner";

class App extends React.Component {
  state = {
    mode: "default",
  };

  modeHandler = () => {
    const currentMode = this.state.mode;
    currentMode === "default" ? this.setState({ mode: "stacked" }) : this.setState({ mode: "default" });
    console.log(this.state.mode);
  };

  render() {
    return (
      <>
        <NavBar changeMode={this.modeHandler} />
        <WarningSign text="Wow, prop text, react is amazing!" subText="This is some subtext" />
        <JumboBanner />
        <Container>
          <MyBadge color="primary" text="Wow, amazing!" />
          <Row>
            {this.state.mode === "default" ? <BookList /> : ""}
            {this.state.mode === "stacked" && <StackedBookList />}
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
