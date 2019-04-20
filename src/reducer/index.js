import {combineReducers} from 'redux';
import mainMenuReducer from './mainMenu';
import alerts from './alerts';

export default combineReducers({
  mainMenu: mainMenuReducer,
  alerts: alerts
})