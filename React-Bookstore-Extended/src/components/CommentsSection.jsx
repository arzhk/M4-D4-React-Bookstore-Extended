import React from "react";
import apiData from "../data/apidata";
import { Row, Col, Alert, Spinner } from "react-bootstrap";

class CommentsSection extends React.Component {
  state = {
    selectedBookID: this.props.selectedBookID,
    hasData: false,
    data: [],
    isLoading: this.props.isLoading,
  };

  fetchCommentsHandler = async (bookID) => {
    try {
      this.setState({ isLoading: true });
      const response = await fetch(apiData.url + `${bookID}/`, {
        method: "GET",
        headers: {
          Authorization: apiData.authKey,
        },
      });
      const data = await response.json();
      this.setState({ data });
      this.setState({ isLoading: false });
    } catch (error) {
      console.error(`API ERROR : ${error.message}`);
    }
  };

  componentDidMount = () => {
    this.fetchCommentsHandler(this.state.selectedBookID);
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.selectedBookID !== this.props.selectedBookID) {
      this.fetchCommentsHandler(this.props.selectedBookID);
    } else {
      return;
    }
  };

  checkRating = (rating) => {
    switch (rating) {
      case 1:
        return "badge-danger py-2 px-3 rounded text-left";
      case 2:
        return "badge-danger py-2 px-3 rounded text-left";
      case 3:
        return "badge-warning py-2 px-3 rounded text-left";
      default:
        return "badge-success py-2 px-3 rounded text-left";
    }
  };

  render() {
    return (
      <Row>
        <Col>
          <div>
            <h2>Comments</h2>
            <div className={this.state.isLoading ? "d-block" : "d-none"}>
              Loading...
              <Spinner size="sm" animation="border" variant="primary" disabled />
            </div>

            {this.state.data.length > 0 ? (
              this.state.data.map((e, index) => (
                <Alert key={index} variant="dark" className="rounded">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="w-75">
                      <Alert variant="light" className=" font-weight-bold rounded mb-0">
                        Comment: <span className="font-weight-normal">{e.comment}</span>
                      </Alert>
                    </span>
                    <div className={this.checkRating(e.rate)}>
                      {[...Array(e.rate)].map((e) => (
                        <i class="fas fa-star"></i>
                      ))}
                    </div>
                  </div>
                </Alert>
              ))
            ) : (
              <Alert variant="danger" className={this.state.isLoading ? "d-none" : "d-block"}>
                No Comments Found
              </Alert>
            )}
          </div>
        </Col>
      </Row>
    );
  }
}

export default CommentsSection;
