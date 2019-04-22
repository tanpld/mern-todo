import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions/todoActions';

class AddTodo extends Component {
  handleSubmit = e => {
    if (e.key === 'Enter') {
      this.props.addTodo(e.target.value);
      e.target.value = '';
    }
  };

  render() {
    return (
      <div className="add-box">
        <input type="text" onKeyPress={this.handleSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo },
)(AddTodo);
