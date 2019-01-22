import * as action from './actions';
import { fetchGet } from '../shared/utility';

export const initWelcome = () => {
  return dispatch => {
    fetchGet('/info')
      .then(data => {
        dispatch({ type: action.INIT_WELCOME, data: data });
      })
      .catch(error => {
        console.log(error);
      });
  };
};
