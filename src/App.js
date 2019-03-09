import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MainNav from './components/main-nav/MainNav'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: false
    }
  }

  render() {
    return (
      <div className="app">
        <MainNav/>
      </div>
    );
  }
}

export default App;