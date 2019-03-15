import React from 'react';
import {render} from 'react-dom';
import Route from './components/router/Route';
import Router from './components/router/Router';
import { history } from './history/history'
import App from './App';
import Home from './pages/Home';
import Income from './pages/Income';
import Costs from './pages/Costs'

const appContainer = document.getElementById("app");

export const renderApp = (state, callback = () => {}) =>
  render (
    <Router {...state}>
      <Route path="" component={App}>
        <Route path="/" component={Home}/>
        <Route path="/income" component={Income}/>
        <Route path="/costs" component={Costs}/>
      </Route>
    </Router>,
    appContainer,
    callback
);

let state = {
  location: window.location.pathname,
};

history.listen(location => {
  state = Object.assign({}, state, {
    location: location.pathname
  });
  renderApp(state);
})


renderApp(state);