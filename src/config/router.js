import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from '../containers/welcome/welcome';
import Courses from '../containers/courses/courses';
import addCourse from '../containers/courses/add-course';
import ProblemCollection from '../containers/problems/problem-collection';
import AddProblem from '../containers/problems/add-problem';
import Ide from '../components/ide/ide';
import './router.css';

const Router = () => {
  return (
    <div className={'router-body'}>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/courses' component={Courses} />
        <Route path='/problems' component={ProblemCollection} />
        <Route path='/ide' component={Ide} />
        <Route path='/addProblem' component={AddProblem} />
        <Route path='/addCourse' component={addCourse} />
      </Switch>
    </div>
  );
};

export default Router;
