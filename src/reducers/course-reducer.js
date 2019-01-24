import { FETCH_COURSES } from '../actions/actions';

const initialState = {
  courses: [],
  isLoading: true,
  error: null
};

const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES:
      return {
        error: null,
        isLoading: false,
        courses: action.courses
      };
    default: return state;
  }
};

export default CourseReducer;
