import React from 'react'
import PropTypes from 'prop-types'
import App from '../App'
import store from '../store'
import {Provider} from  'react-redux'


function Root() {
  return (
    <Provider store = {store}>
      <App/>
    </Provider>
  )
}

export default Root