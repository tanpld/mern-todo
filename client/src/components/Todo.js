import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, completeTodo } from '../actions/todoActions';

class Todo extends React.Component {
  handleComplete = () => {
    this.props.completeTodo(this.props.todo._id);
  };

  handleDelete = () => {
    this.props.deleteTodo(this.props.todo._id);
  };

  render() {
    const { todo } = this.props;

    return (
      <li
        style={{ cursor: 'pointer' }}
        className={todo.completed ? 'checked' : ''}
        onClick={this.handleComplete}
      >
        <span>{todo.title}</span>
        <span className="close" onClick={this.handleDelete}>
          &#10799;
        </span>
      </li>
    );
  }
}

export default connect(
  null,
  { deleteTodo, completeTodo },
)(Todo);
