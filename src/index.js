import React from 'react';
import {render} from 'react-dom';
// import App from './App';
import Root from './components/Root';
import 'normalize.css';
import store from './store'

const appContainer = document.getElementById("app");
appContainer.style.cssText=`
  padding: 0 15px;
`

render(<Root/>,appContainer);