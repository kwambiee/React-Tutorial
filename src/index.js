import React from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from './functionBased/components/TodoContainer';
import { BrowserRouter as Router } from 'react-router-dom';
import './functionBased/App.css';

ReactDOM.render(
  <Router>
    <TodoContainer />
  </Router>,
  document.getElementById('root')
);
