import {combineReducers} from 'redux';
import mainMenu from './mainMenu';
import alerts from './alerts';

export default combineReducers({
  mainMenu,
  alerts
})