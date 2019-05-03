import {combineReducers} from 'redux';
import mainMenu from './mainMenu';
import alerts from './alerts';
import transactions from './transactions';

export default combineReducers({
  mainMenu,
  alerts,
  transactions
})