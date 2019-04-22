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
  dispatch({
    type: LOAD_TODOS,
  });
  try {
    const res = await axios.get('/todos');
    dispatch({
      type: GET_TODOS,
      payload: res.data,
    });
  } catch (err) {
    console.log('getTodos >> ', err);
  }
};

export const addTodo = title => async dispatch => {
  try {
    const res = await axios.post('/todos', { title: title });
    dispatch({
      type: ADD_TODO,
      payload: res.data,
    });
  } catch (err) {
    console.log('addTodo >> ', err);
  }
};

export const deleteTodo = todoId => async dispatch => {
  try {
    const res = await axios.post(`/todos/delete/${todoId}`);
    dispatch({
      type: DELETE_TODO,
      payload: res.data.todoId,
    });
  } catch (err) {
    console.log('deleteTodo >> ', err);
  }
};

export const completeTodo = todoId => async dispatch => {
  try {
    const res = await axios.patch(`/todos/complete/${todoId}`);
    dispatch({
      type: COMPLETE_TODO,
      payload: res.data.todoId,
    });
  } catch (err) {
    console.log('completeTodo >> ', err);
  }
};
