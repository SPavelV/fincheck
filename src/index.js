import React from 'react';
import {render} from 'react-dom';
import App from './pages/App';
import Home from './pages/Home';
import Route from './components/router/Route';
import Router from './components/router/Router';
import { history } from './history/history'

const appContainer = document.getElementById("app");

export const renderApp = (state, callback = () => {}) =>
  render (
    <Router {...state}>
      <Route path="" component={App}>
        <Route paht="/" component={Home}/>
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