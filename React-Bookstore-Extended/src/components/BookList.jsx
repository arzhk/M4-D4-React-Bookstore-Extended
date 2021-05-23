import React from "react";
import { Container, Row, Col, FormControl } from "react-bootstrap";
import CommentsSection from "./CommentsSection";
import SingleBook from "./SingleBook";
import Fantasy from "../data/fantasy.json";

export default class BookList extends React.Component {
  state = {
    books: Fantasy,
    isFiltered: false,
    selectedBookID: null,
    selectedBookImage: null,
  };

  filterBooks = (filterQuery) => {
    if (filterQuery.length > 0) {
      let filteredBooks = Fantasy.filter((e) => e.title.toLowerCase().includes(filterQuery.toLowerCase()));
      this.setState({ books: filteredBooks, isFiltered: true });
    } else {
      this.setState({ books: Fantasy, isFiltered: false });
    }
  };
  selectBook = (id, imageUrl) => {
    this.setState({ selectedBookID: id, selectedBookImage: imageUrl });
  };

  render() {
    return (
      <Container>
        {this.state.selectedBookID && (
          <CommentsSection
            selectedBookID={this.state.selectedBookID}
            selectedBookImage={this.state.selectedBookImage}
            isLoading={true}
          />
        )}
        <Row className="mb-4">
          <Col xs={6}>
            <h2>Filter Books</h2>
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
          {this.state.books.map((e, index) => (
            <Col key={index} className="mb-4" xs={3}>
              <SingleBook book={e} selectBook={this.selectBook} isSelected={this.state.selectedBookID === e.asin} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
