import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MainNav from '../components/main-nav/MainNav'

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
        <MainNav/>
        {this.state.loading ? (
          <div className="loading">
            {/* <Loader/> */}
          </div>
        ) : (
          0
          // this.props.children 
        )}
      </div>
    );
  }
}

export default App;