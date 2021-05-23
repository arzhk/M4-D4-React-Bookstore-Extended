import React from "react";
import apiData from "../data/apidata";
import { Row, Col, Alert, Spinner } from "react-bootstrap";

class CommentsSection extends React.Component {
  state = {
    selectedBookID: this.props.selectedBookID,
    selectedBookImage: this.props.selectedBookImage,
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
      setTimeout(() => {
        this.setState({ isLoading: false });
        this.setState({ data });
      }, 500);
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
      this.setState({ selectedBookImage: this.props.selectedBookImage });
    }
  };

  checkRating = (rating) => {
    switch (rating) {
      case 1:
        return "badge-danger d-flex rounded py-2 px-1";
      case 2:
        return "badge-danger d-flex rounded py-2 px-1";
      case 3:
        return "badge-warning d-flex rounded py-2 px-1";
      default:
        return "badge-success d-flex rounded py-2 px-1";
    }
  };

  render() {
    return (
      <Row>
        <Col>
          <div>
            <h2 className="d-block">Comments</h2>
            <Alert variant="dark" className="d-flex justify-content-start align-items-start mb-5 py-3 px-3 rounded-lg">
              <div className={this.state.isLoading ? "d-block w-100" : "d-none"}>
                <p className="d-inline-block mb-0 mr-2">Loading...</p>
                <Spinner size="sm" animation="border" variant="primary" disabled />
              </div>
              <div className="comments-image">
                {!this.state.isLoading && (
                  <img className="rounded-lg" src={this.state.selectedBookImage} alt="book-comments" />
                )}
              </div>
              <div className="d-flex flex-column w-100 px-4">
                {!this.state.isLoading ? (
                  this.state.data.length > 0 ? (
                    this.state.data.map((e, index) => (
                      <div key={index} className="rounded w-100 mb-3">
                        <div className="d-flex justify-content-start align-items-center">
                          <span className="w-75 mr-3">
                            <Alert variant="light" className=" font-weight-bold rounded mb-0">
                              <span className="font-weight-normal">"{e.comment}"</span>
                            </Alert>
                          </span>
                          <div className={this.checkRating(e.rate)}>
                            {[...Array(e.rate)].map((e, index) => (
                              <i key={index} className="fas fa-star px-1"></i>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <Alert variant="danger" className={this.state.isLoading ? "d-none" : "d-block"}>
                      No Comments Found
                    </Alert>
                  )
                ) : (
                  <Alert variant="danger" className={this.state.isLoading ? "d-none" : "d-block"}>
                    No Comments Found
                  </Alert>
                )}
              </div>
            </Alert>
          </div>
        </Col>
      </Row>
    );
  }
}

export default CommentsSection;
