import React from "react";
import { Row, Col, FormControl, Alert } from "react-bootstrap";
import CommentsSection from "./CommentsSection";
import StackedSingleBook from "./SingleBook";
import Fantasy from "../data/fantasy.json";

export default class StackedBookList extends React.Component {
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
      <div className="pl-3 w-100">
        <Row className="mb-4">
          <Col xs={3}>
            <h2>Filter Books</h2>
            <FormControl
              placeholder="Filter books by title..."
              aria-label="Username"
              aria-describedby="basic-addon1"
              className="mb-4"
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
            {this.state.books.map((e, index) => (
              <Col key={index} className="mb-4 px-0" xs={12}>
                <StackedSingleBook
                  book={e}
                  selectBook={this.selectBook}
                  isSelected={this.state.selectedBookID === e.asin}
                />
              </Col>
            ))}
          </Col>
          <Col xs={9}>
            {this.state.selectedBookID ? (
              <CommentsSection
                selectedBookID={this.state.selectedBookID}
                selectedBookImage={this.state.selectedBookImage}
                isLoading={true}
              />
            ) : (
              <div>
                <h2 className="d-block">Comments</h2>
                <Alert
                  variant="dark"
                  className="d-flex justify-content-start align-items-start mb-5 py-3 px-3 rounded-lg"
                >
                  <Alert variant="warning" className="w-100 mb-0">
                    Select a book to begin
                  </Alert>
                </Alert>
              </div>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}
