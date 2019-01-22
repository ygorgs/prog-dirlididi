import * as actionTypes from '../actions/actions';

const initialState = {
  data: null,
  isLoading: true,
  error: null
};

const WelcomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_WELCOME:
      return {
        error: null,
        isLoading: false,
        data: action.data
      };
    default: return state;
  }
};

export default WelcomeReducer;
