import React from 'react';
import {render} from 'react-dom';
import Root from './components/Root';
import 'normalize.css';

const appContainer = document.getElementById("app");
appContainer.style.cssText=`
  padding: 0 15px;
`

render(<Root/>,appContainer);