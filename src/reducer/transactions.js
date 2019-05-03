import {transactions} from '../assets/data';
import {
  ADD_TRANSACTION,
  REMOVE_TRANSACTION,
  EDITING_TRANSACTION
} from '../constants.js';

export default (transactionsState = transactions, action) => {
  const {
    type,
    payload
  } = action;

  switch(type) {
    case ADD_TRANSACTION: 
      console.log('Add transaction');
      break;
    case REMOVE_TRANSACTION:
      console.log('Remove transaction');
      break;
    case EDITING_TRANSACTION:
      console.log('EDITING_TRANSACTION');
      break;
    default: 
      return transactionsState;
  }
}