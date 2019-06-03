import {transactions} from '../assets/data';
import {getTransactionName,getRightAmountData,formatDate} from '../common-functions';
import {
  CREATE_DATA_TRANSACTION_DETAIL,
  CREATE_DATA_TRANSACTION_DETAIL_AFTER_SAERCH,
  DELETE_DATA_TRANSACTION_DETAIL
} from '../constants';

export default (state = [], action) => {
  const {
    type,
    payload
  } = action;

  switch(type) {
    case CREATE_DATA_TRANSACTION_DETAIL: 
      const {category,name} = payload;
      let data = getRightAmountData(getTransactionName(transactions,category,name), 10, state.length);
      // console.log('data: ',data )

      return getTransactionName(transactions,category,name);
    case CREATE_DATA_TRANSACTION_DETAIL_AFTER_SAERCH:
      const {inputValue} = payload;
      const initData = getTransactionName(transactions,payload.category,payload.name);
      if(inputValue.length === 0) {
        return initData;
      } else {
        const regExp = new RegExp(inputValue, 'gi');
        const searchData = initData.filter(element => {
          const date = formatDate(element.date);
          return String(element.sum).search(regExp) >= 0 || date.search(regExp) >=0;
        });
        return searchData;
      }
    case DELETE_DATA_TRANSACTION_DETAIL: 
      return [];
    default:
      return state;
  }
}