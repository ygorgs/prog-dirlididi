import { combineReducers } from 'redux';
import ProblemReducer from './problem';
import WelcomeReducer from './welcome-reducer';

const rootReducer = combineReducers({
  problemReducer: ProblemReducer,
  welcomeReducer: WelcomeReducer
});

export default rootReducer;
