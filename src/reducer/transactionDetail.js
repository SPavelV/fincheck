import {transactionsDetail} from '../assets/data';
import {
  CREATE_DATA_TRANSACTION_DETAIL,
  DELETE_DATA_TRANSACTION_DETAIL
} from '../constants';

export default (state = transactionsDetail, action) => {
  const {
    type,
    payload
  } = action;

  switch(type) {
    case CREATE_DATA_TRANSACTION_DETAIL: 
      console.log('---CREATE_DATA_TRANSACTION_DETAIL:',payload);
      break;
    case DELETE_DATA_TRANSACTION_DETAIL:
      console.log('---DELETE_DATA_TRANSACTION_DETAIL:',);
      break;
    default:
      return state;
  }
}