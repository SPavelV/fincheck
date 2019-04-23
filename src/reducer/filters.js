import {
  SORT_DATE_ALERTS_ITEM
} from '../constants';
import {filters} from '../assets/data';

export default (filterState = filters, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case SORT_DATE_ALERTS_ITEM:
      console.log('---Sorting data by date:',);
      
      break
    default:
      return filterState;
  }
}