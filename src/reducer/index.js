import {combineReducers} from 'redux';
import counterReducer from './counter';
import mainMenuReducer from './mainMenu';

export default combineReducers({
  count: counterReducer,
  mainMenu: mainMenuReducer
})