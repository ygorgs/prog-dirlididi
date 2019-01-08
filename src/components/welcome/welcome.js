import React, { Component } from 'react';

export default class Welcome extends Component {
  render() {
    return (
      <div id='welcomeScreen'>
        <h2 id='titleH2Welcome'> <p>Solve problems to learn program skills!</p> </h2>
        <h3> <p>Global Stats</p> </h3>
        <ul>
          <li>
            <b>211</b> problems
          </li>
          <li>
            <b>811</b> submitters
          </li>
        </ul>
        <h3> <p>Your stats!</p> </h3>
        <ul>
          <li>
            <b></b> problems solved
          </li>
        </ul>
        <h3> <p>Code submission</p> </h3>
        <p>Submit codes using <a href='http://dirlididi.com/tools/dirlididi.py' id='corLink'>our python tool</a> (token: ) or using our web IDE.</p>
        <h3> <p>Courses</p> </h3>
      </div>
    )
  }
}