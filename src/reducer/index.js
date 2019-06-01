import {combineReducers} from 'redux';
import mainMenu from './mainMenu';
import alerts from './alerts';
import transactions from './transactions';
import detailTransaction from './detailTransaction';

export default combineReducers({
  mainMenu,
  alerts,
  transactions,
  detailTransaction
})