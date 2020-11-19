import React from "react";
import { Card, Button } from "react-bootstrap";

class SingleBook extends React.Component {
  state = {
    selected: false,
    className: null,
  };

  toggleSelected = () => {
    this.setState({
      selected: this.state.selected === false ? true : false,
    });
  };

  render() {
    const { book } = this.props;
    const isSelected = this.state.selected;
    return (
      <Card className={isSelected ? "test" : null} onClick={() => this.toggleSelected()}>
        <div className="card-img" style={{ background: `url(${book.img})` }} alt="book-img"></div>
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.category}</Card.Text>
          <Card.Text className="font-weight-bold">£{book.price}</Card.Text>
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
