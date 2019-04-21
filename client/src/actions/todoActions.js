import axios from 'axios';

import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  LOAD_TODOS,
} from './todoActionTypes';

axios.defaults.baseURL = 'http://localhost:5555/api/v1';

export const getTodos = () => async dispatch => {
  const res = await axios.get('/todos');
  dispatch({
    type: GET_TODOS,
    payload: res.data,
  });
};
