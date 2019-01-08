import React, { Component } from 'react';
import Menu from "./menu/menu";
import Router from "../config/router";

export default class App extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <Router/>
      </div>
    );
  }
}
