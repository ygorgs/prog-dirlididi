import React, { Component } from "react";
import "./card-icon.css"
import PropTypes from "prop-types";
import {Col} from "react-bootstrap";

export default class CardIcon extends Component {
  render() {
    const cardStyle = {
      backgroundColor: this.props.color,
    };

    return (
      <Col md={4} className={"card-icon"} style={cardStyle}>
        <span className="fa-stack fa-4x">
          <i className="fa fa-circle fa-stack-2x text-primary" />
          <i className={`${this.props.icon} fa-stack-1x fa-inverse`} />
        </span>
        <h4 className={"card-icon-title"}>
          {this.props.title}
        </h4>
        <p className={"card-icon-description"}>
          {this.props.description}
        </p>
      </Col>
    )
  }
}

CardIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
