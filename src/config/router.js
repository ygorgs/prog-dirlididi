import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from "../containers/welcome/welcome";
import Courses from "../containers/courses/courses";
import Problems from "../containers/problems/problems";
import Ide from "../components/ide/ide";
import "./router.css"

const Router = () => {
  return (
    <div className={"router-body"}>
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route path="/courses" component={Courses}/>
        <Route path="/problems" component={Problems}/>
        <Route path="/ide" component={Ide}/>
      </Switch>
    </div>
  );
};

export default Router;
