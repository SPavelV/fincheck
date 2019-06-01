import {transactions} from '../assets/data';
import {getTransactionName} from '../common-functions';
import {
  CREATE_DATA_TRANSACTION_DETAIL
} from '../constants';

export default (state = [], action) => {
  const {
    type,
    payload
  } = action;

  switch(type) {
    case CREATE_DATA_TRANSACTION_DETAIL: 
      const {category,name} = payload;
      state = getTransactionName(transactions,category,name);
      return state;
    default:
      return state;
  }
}