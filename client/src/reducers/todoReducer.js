import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  LOAD_TODOS,
} from '../actions/todoActionTypes';

const initialState = {
  loading: false,
  todos: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo._id !== action.payload),
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          return todo._id === action.payload
            ? { ...todo, completed: true }
            : todo;
        }),
      };
    case LOAD_TODOS:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
