import React from 'react';
import {NavItem} from "react-bootstrap";

const NavItemMenu = (props) => {
  return (
    <NavItem id='navItem' eventKey={props.eventKey} href={`/${props.toLink}`}>
      {props.name}
    </NavItem>
  );
}
export default NavItemMenu;
