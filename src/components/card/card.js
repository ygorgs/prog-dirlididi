import React, { Component } from 'react';
import './card.css';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

export default class Card extends Component {
  render () {
    const cardStyle = {
      backgroundColor: this.props.color
    };

    return (
      <Col sm={4} className={'card'} style={cardStyle}>
        <h4 className={'card-title'}>
          {this.props.title}
        </h4>
        <p className={'card-description'}>
          {this.props.description}
        </p>
      </Col>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};
