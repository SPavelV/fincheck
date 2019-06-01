import {transactions} from '../assets/data';
import {detailTransaction} from '../assets/data';
import {getTransactionName} from '../common-functions';
import {
  CREATE_DATA_TRANSACTION_DETAIL,
  DELETE_DATA_TRANSACTION_DETAIL
} from '../constants';

export default (state = detailTransaction, action) => {
  const {
    type,
    payload
  } = action;

  switch(type) {
    case CREATE_DATA_TRANSACTION_DETAIL: 
      const {category,name} = payload;
      state = getTransactionName(transactions,category,name);
      return state;

    case DELETE_DATA_TRANSACTION_DETAIL:
      console.log('---DELETE_DATA_TRANSACTION_DETAIL:',);
      return state;
    default:
      return state;
  }
}