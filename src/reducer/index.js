import {combineReducers} from 'redux';
import mainMenu from './mainMenu';
import alerts from './alerts';
import transactions from './transactions';
import detailTransaction from './detailTransaction';
import selectTransactionItem from './selectTransactionItem';
import search from './search';
import transactionsCategory from './createTransactionsCategory';
import categories from './categories';
import typeTransactions from './typeTransactions';

export default combineReducers({
  mainMenu,
  alerts,
  transactions,
  detailTransaction,
  selectTransactionItem,
  search,
  transactionsCategory,
  categories,
  typeTransactions
})