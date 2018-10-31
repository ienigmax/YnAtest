import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './tasks.css';
import TasksAppContainer from './components/TasksAppContainer';

class App extends Component {
  render() {
    return (
      <TasksAppContainer/>
    );
  }
}

export default App;
