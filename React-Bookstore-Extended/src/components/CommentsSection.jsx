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
                <Alert key={index} variant="dark">
                  <div className="d-block">
                    <p className="font-weight-bold d-inline-block">BookID:</p>
                    <span> {e.elementId}</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>
                      <span className="font-weight-bold">Comment:</span> {e.comment}
                    </span>
                    <p className="badge badge-primary py-2 px-3 my-0">
                      Rating:<span className="ml-2"> {e.rate}</span> / 5
                    </p>
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
