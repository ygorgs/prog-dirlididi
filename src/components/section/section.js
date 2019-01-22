import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './section.css';
import { Row } from 'react-bootstrap';

export default class Section extends Component {
  render () {
    const sectionStyle = {
      backgroundColor: this.props.color
    };

    return (
      <section className='section' id={this.props.id} style={sectionStyle}>
        <div className='section-body'>
          <Row className='section-title'>
            <h2>{this.props.title}</h2>
            <h3>{this.props.subTitle}</h3>
          </Row>
          <Row className='section-children'>
            {this.props.children}
          </Row>
        </div>
      </section>
    );
  }
}

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ]).isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
};
