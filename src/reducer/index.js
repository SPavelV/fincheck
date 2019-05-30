import {combineReducers} from 'redux';
import mainMenu from './mainMenu';
import alerts from './alerts';
import transactions from './transactions';
import transactionDetail from './transactionDetail';

export default combineReducers({
  mainMenu,
  alerts,
  transactions,
  transactionDetail
})