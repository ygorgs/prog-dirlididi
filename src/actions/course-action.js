import * as action from './actions';
import { fetchGet, fetchDelete, fetchPost, fetchPut} from '../shared/utility'

export const getCourses = () => {
  return dispatch => {
    fetchGet(`/api/course/`)
      .then(courses => dispatch({ type: action.GET_COURSES, courses: courses }))
      .catch(error => console.log(error))
  }
};

export const getCourseByID = (courseId) => {
  return dispatch => {
    fetchGet(`/api/course/${courseId}`)
      .then(course => dispatch({ type: action.GET_COURSE_BY_ID, course: course }))
      .catch(error => console.log(error))
  }
};

export const createCourse = (course) => {
  return dispatch => {
    fetchPost(`/api/course`, course)
      .then(course => (course.error) ? dispatch(createFail(course.error)) 
                      : dispatch({type: action.CREATE_COURSE, course: course}))
      .catch(error => console.log(error))
  }
};

export const updateCourse = (courseId, body) => {
  return  dispatch => {
    fetchPut(`/api/course/${courseId}`, body)
      .then(course => dispatch({ type: action.UPDATE_COURSE, course: course }))
      .catch(error => console.log(error))
  }
};

export const deleteCourse = (courseId) => {
  return dispatch => {
    fetchDelete(`/api/course/${courseId.join(',')}`)
      .then(() => dispatch({ type: action.DELETE_COURSE, courseID: courseId }))
      .catch(error => console.log(error))
  }
};

const createFail = error => (
  {
    type: action.CREATE_FAIL,
    error: error
  }
);
