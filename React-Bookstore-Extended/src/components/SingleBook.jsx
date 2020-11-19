import React from "react";
import { Card, Button, Badge } from "react-bootstrap";

class SingleBook extends React.Component {
  state = {
    selected: false,
    className: null,
    bookID: null,
    isHovered: false,
  };

  componentDidMount = () => {
    this.setState({ bookID: this.props.book.asin });
  };

  render() {
    const { book, selectBook, isSelected } = this.props;

    return (
      <Card className={isSelected ? "selected" : ""} onClick={() => selectBook(book.asin, book.img)}>
        <div className="card-img" style={{ background: `url(${book.img})` }} alt="book-img"></div>
        <Card.Body className="d-flex flex-column justify-content-between px-3 py-2">
          <div className="mb-4">
            <Badge variant="primary" className="mb-2">
              {book.category}
            </Badge>
            <Card.Title>{book.title}</Card.Title>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <Card.Text className="price-info font-weight-bold mb-0">
              <i class="fas fa-tags mr-2"></i>£{book.price}
            </Card.Text>
            <Button variant="success" className="btn-addtocart">
              <i class="fas fa-cart-plus"></i>
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
