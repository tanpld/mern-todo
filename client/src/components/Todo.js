import React from 'react';

const Todo = ({ todo }) => {
  return (
    <li>
      <span>{todo.title}</span> <span>{String(todo.completed)}</span>
    </li>
  );
};

export default Todo;
