import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

const alert = (show) => {
  if (show) {
    return (
      <Alert bsStyle='success'>Submission Completed!</Alert>
    );
  }
};

class CustomAlert extends Component {
  render () {
    return (
      <div>
        { alert(this.props.showAlert) }
      </div>
    );
  }
}

export default CustomAlert;
