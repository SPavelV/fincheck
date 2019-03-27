import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment} from '../actions'

class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number
  }
  render() {
    return (
      <div className="counter">
        <h2>{this.props.counter}</h2>
        <button onClick={this.handleIncrement}>Increment me</button>
      </div>
    )
  }

  handleIncrement = () => {
    console.log('---', 'handle increment');
    this.props.increment()
  }
}

export default connect((state) => ({
  counter: state.count
}), {increment})(Counter)