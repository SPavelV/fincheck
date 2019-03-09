import PropTypes from 'prop-types';
import { Component } from 'react';
import invariant from 'invariant';

class Route extends  Component {
  static propTypes = {
    path: PropTypes.string,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
  };

  render() {
    return invariant(false, "<Rout> elements are for config only end shouldn't be rendered");
  }
}

export default Route;