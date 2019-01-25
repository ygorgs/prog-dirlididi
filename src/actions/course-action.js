import { FETCH_COURSES } from './actions';
import { fetchGet } from '../shared/utility';

export const fetchCourses = () => {
  return dispatch => {
    fetchGet('/course')
      .then(courses => dispatch({ type: FETCH_COURSES, courses: courses }))
      .catch(error => console.log(error));
  };
};
