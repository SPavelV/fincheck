import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MainNav from './components/main-nav/MainNav'
import RouterLink from './components/router/Link';
import ReactSVG from 'react-svg';

import logo from './assets/images/icons/logo.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: false
    }
  }

  static propTypes = {
    children: PropTypes.node
  };

  componentDidCatch(err, info) {
    console.error(err);
    console.error(info);
    this.setState(() => ({
      error: err
    }));
  }

  render() {
    if(this.state.error) {
      return (
        <div className="app">
          {/* <ErrorMessage error={this.state.error}/> */}
        </div>
      );
    }
    return (
      <div className="app">
        <header className="app__header">
          <RouterLink to="/">
            <a href="/" className="app__logo">
              <ReactSVG 
              evalScripts="always"
              src = {logo}
              svgClassName="app__logo-icon"
              svgStyle={{ width: 100 }}
              wrapper="span"
              />
            </a>
          </RouterLink>
          <MainNav/>
          {this.state.loading ? (
            <div className="loading">
              {/* <Loader/> */}
            </div>
          ) : (
            
            this.props.children 
          )}
        </header>
      </div>
    );
  }
}

export default App;