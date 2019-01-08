import React, { Component } from 'react';
import './style/nav-bar.css';
import NavItemMenu from './nav-item-menu.js';
import {Nav, Navbar} from "react-bootstrap";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar id='menu'>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/" id='iconHome'>
                <span>
                  <i className="fa fa-home" aria-hidden="true" />
                </span>
                <span> Dirlididi</span>
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItemMenu toLink='courses' name='Courses' eventKey={1} />
              <NavItemMenu toLink='problems' name='Problems' eventKey={2} />
              <NavItemMenu toLink='ide' name='IDE' eventKey={3} />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Menu;
