import { combineReducers } from 'redux';
import ProblemReducer from "./problem";
import CoursesReducer from './coursesReducer';

const rootReducer = combineReducers({
  problemReducer: ProblemReducer,
  coursesReducer: CoursesReducer,
});

export default rootReducer;
