import * as action from './actions';
import { fetchGet, fetchDelete, fetchPost, fetchPut} from '../shared/utility'

export const createProblem = (problem) => {
  return dispatch => (
    fetchPost(`/api/problem`, problem)
      .then(problem => {
        if (problem.error) {
          dispatch(createFail(problem.error))
        } else {
          dispatch({type: action.CREATE_PROBLEM, problem: problem})
        }
      })
      .catch(error => {
        console.log(error)
      })
  )
};

export const updateProblem = (problemId, body) => {
  return  dispatch => {
    fetchPut(`/api/problem/${problemId}`, body)
      .then(problem => {
        dispatch({ type: action.UPDATE_PROBLEM, problem: problem });
      })
      .catch(error => {
        console.log(error)
      })
  }
};


export const deleteProblem = (problemId) => {
  return dispatch => (
    fetchDelete(`/api/problem/${problemId.join(',')}`)
      .then(dispatch({ type: action.DELETE_PROBLEM, problemID: problemId }))
      .catch(error =>{
        console.log(error)
      })
  )
};

export const getProblems = () => {
  return  dispatch => {
    fetchGet('/api/problem')
      .then(problems => {
        dispatch({ type: action.INIT_PROBLEMS, problems: problems });
      })
      .catch(error => {
        console.log(error)
      })
  }
};

const createFail = error => (
  {
    type: action.CREATE_FAIL,
    error: error
  }
);
