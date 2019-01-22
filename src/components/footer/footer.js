import React, { Component } from 'react';
import './footer.css';
import { Col, Row } from 'react-bootstrap';

export default class Footer extends Component {
  render () {
    return (
      <footer className={'footer'}>
        <div className={'container'}>
          <Row>
            <Col md={4} className={'copy'}>
              <span className='copyright'>Copyright&nbsp;© Dirlididi 2018</span>
            </Col>
            <Col md={4} className={'license'}>
              <a href='/'>Terms of Use</a>
            </Col>
          </Row>
        </div>
      </footer>

    );
  }
}
