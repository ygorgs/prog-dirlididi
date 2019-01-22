import React, { Component } from "react";
import "./card-button.css"
import PropTypes from "prop-types";
import {Col} from "react-bootstrap";

export default class CardButton extends Component {
  render() {
    const cardStyle = {
      backgroundColor: this.props.color,
    };

    return (
      <Col sm={6} md={4} className={"card-button"} style={cardStyle}>
          <a className={"card-button-link"} href="#portfolioModal1">
            <div className="card-button-hover">
              <div className="card-button-hover-content">
                <i className="fa fa-plus fa-3x"/>
              </div>
            </div>
            <img src={require(`../../assets/img/${this.props.img}`)} className={"img-fluid"} alt={""}/>
          </a>
          <div className={"card-button-caption"}>
            <h4>
              {this.props.title}
            </h4>
            <p className={"card-button-description"}>
              {this.props.description}
            </p>
          </div>
      </Col>
    )
  }
}

CardButton.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
