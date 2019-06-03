import {transactions} from '../assets/data';
import {getTransactionName} from '../common-functions';
import {
  CREATE_DATA_SEARCH_DETAIL_TRANSACTION,
  DELETE_DATA_SEARCH_DETAIL_TRANSACTION
} from '../constants';

export default (state = [], action) => {
  const {
    type,
    payload
  } = action;

  switch(type) {
    case CREATE_DATA_SEARCH_DETAIL_TRANSACTION: 
      const {category,name} = payload;
      state = getTransactionName(transactions,category,name);
      return state;
    case DELETE_DATA_SEARCH_DETAIL_TRANSACTION:
      return state;
    default:
      return state;
  }
}