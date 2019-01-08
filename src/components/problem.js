import React from "react";

class Problem extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSolve = this.handleSolve.bind(this);

    this.state = {
      key: null,
      description: "",
      isSolved: false,
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleSolve(key) {
    // TODO: redirect to IDE
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleShow}>Full width button</Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Problem Title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            Display Problem here
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
            <Button onClick={this.handleSolve(this.state.key)}>Solve</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
