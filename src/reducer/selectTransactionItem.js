import {transactions} from '../assets/data';
import {
  CREATE_SELECT_TRANSACTION_ITEM
} from '../constants';

export default (state = {}, action) => {
  const {
    type,
    payload
  } = action;

  switch(type) {
    case CREATE_SELECT_TRANSACTION_ITEM:
      const {id} = payload;
      return transactions.filter(element => element.id === id)[0];
    default: 
      return state;
  }
}