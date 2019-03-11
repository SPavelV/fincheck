import React from 'react';
import {render} from 'react-dom';
import App from './App';
import Route from './components/router/Route';
import Router from './components/router/Router';

const appContainer = document.getElementById("app");
const initialState = {
  location: window.location.pathname,
};

const renderApp = (state) =>
  render (
    <Router {...state}>
      <Route path="/" component={App}/>
    </Router>,
    appContainer
);

renderApp(initialState);