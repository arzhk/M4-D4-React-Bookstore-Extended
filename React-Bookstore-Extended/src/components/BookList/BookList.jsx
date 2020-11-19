import React from "react";
import { Container, Row, Col, FormControl } from "react-bootstrap";
import SingleBook from "../SingleBook/SingleBook";
import Fantasy from "../../data/fantasy.json";

export default class BookList extends React.Component {
  state = {
    books: Fantasy,
    isFiltered: false,
  };

  filterBooks = (filterQuery) => {
    let bookSet = this.state.books;
    if (filterQuery.length > 0) {
      let filteredBooks = Fantasy.filter((e) => e.title.toLowerCase().includes(filterQuery.toLowerCase()));
      this.setState({ books: filteredBooks, isFiltered: true });
    } else {
      this.setState({ books: Fantasy, isFiltered: false });
    }
  };

  render() {
    return (
      <Container>
        <Row className="mb-4">
          <Col xs={6}>
            <h5>Filter Books</h5>
            <FormControl
              placeholder="Filter books by title..."
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => this.filterBooks(e.target.value)}
            />
            <p
              className={
                this.state.isFiltered && this.state.books.length === 0
                  ? "d-block badge badge-danger mt-2 py-2"
                  : "d-none"
              }
            >
              No books found
            </p>
          </Col>
        </Row>
        <Row>
          {this.state.books.map((e) => (
            <Col className="mb-4" xs={4}>
              <SingleBook book={e} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
