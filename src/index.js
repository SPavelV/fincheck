// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
const node = document.getElementById("root");

class MainNavigation extends Component {
  render() {
    return React.createElement(
      'nav',
      {
        className: 'main-nav'
      },
      React.createElement(
        'a',
        {
          className: 'main-nav__link',
          href: '#',
          title: 'some-link'
        },
        this.props.linkName,
        React.createElement(
          'img',
          {
            className: 'main-nav__icon',
            src: 'images/svg/icon-add.svg',
            alt: 'Иконка добавить доход!'
          }
        )
      )
    )
  }
}

MainNavigation.propTypes = {
  linkName: PropTypes.string.isRequired
};

const App = React.createElement(MainNavigation, {
  linkName: 'Добавить доход'
});

render(App, node);
