import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './app';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

var todosList = ["Todo 1", "Todo 2"];

const todos = localStorage.getItem('listOfTodos');

if(todos) {
  todosList = JSON.parse(todos);
}

ReactDOM.render(
  <MuiThemeProvider>
    <App tasks={todosList}/>
  </MuiThemeProvider>,
  document.getElementById('first-app')
);
