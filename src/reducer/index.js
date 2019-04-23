import {combineReducers} from 'redux';
import mainMenuReducer from './mainMenu';
import alerts from './alerts';
import filters from './filters';

export default combineReducers({
  mainMenu: mainMenuReducer,
  alerts: alerts,filters

})