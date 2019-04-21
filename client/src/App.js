import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Header from './components/Header';
import AddTodo from './components/AddTodo';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <AddTodo />
        </div>
      </Provider>
    );
  }
}

export default App;
