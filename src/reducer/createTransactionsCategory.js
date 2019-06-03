import {transactions} from '../assets/data';
import {getTransactionData} from '../common-functions';
import {
  CREATE_TRANSACTIONS_CATEGORY
} from '../constants';

export default(state = transactions, action) => {
  const {type} = action;
  switch(type) {
    case CREATE_TRANSACTIONS_CATEGORY:
      console.log('---CREATE_TRANSACTIONS_CATEGORY:',);
      return {
        'income': getTransactionData(state,'income'),
        'costs': getTransactionData(state,'costs')
      }
    default:
      return {
        'income': getTransactionData(state,'income'),
        'costs': getTransactionData(state,'costs')
      }
  }
}