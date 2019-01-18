import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from "../components/welcome/welcome";
import Course from "../containers/courses/course";
import Problem from "../containers/problems/problem";
import Ide from "../components/ide/ide";

const Router = () => {
    return (
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route path="/courses" component={Course}/>
          <Route path="/problems" component={Problem}/>
          <Route path="/ide" component={Ide}/>
        </Switch>
    );
};

export default Router;
