import React from "react";
import { Card, Button } from "react-bootstrap";

class SingleBook extends React.Component {
  state = {
    selected: false,
    className: null,
    bookID: null,
  };

  componentDidMount = () => {
    this.setState({ bookID: this.props.book.asin });
  };

  render() {
    const { book, selectBook, isSelected } = this.props;

    return (
      <Card className={isSelected ? "selected" : ""} onClick={() => selectBook(book.asin)}>
        <div className="card-img" style={{ background: `url(${book.img})` }} alt="book-img"></div>
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.category}</Card.Text>
          <Card.Text className="font-weight-bold">£{book.price}</Card.Text>
          <Button variant="primary">Buy Now</Button>
          <small className="text-right w-100 d-block">{book.asin}</small>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
