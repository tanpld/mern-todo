import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Header from './components/Header';
import AddTodo from './components/AddTodo';
import store from './store';
import ListTodos from './components/ListTodos';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <div className="header">
            <Header />
            <AddTodo />
          </div>
          <ListTodos />
        </div>
      </Provider>
    );
  }
}

export default App;
