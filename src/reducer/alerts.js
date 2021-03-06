import {alerts} from '../assets/data';
import {
  ADD_ALERT_ITEM,
  DEL_ALERT_ITEM,
  SORT_DATES_ALERTS_ITEM
} from '../constants';


export default (alertsState = alerts, action) => {
  const {
    type,
    payload
  } = action;
  switch (type) {
    case ADD_ALERT_ITEM:
      console.log('Add alert item');
      break
    case DEL_ALERT_ITEM:
      console.log('Delete alert item');
      break
    case SORT_DATES_ALERTS_ITEM:
      const sortedData = [...alertsState];
     
      return [...sortedData.sort((el1, el2) => {
        const date1 = new Date(el1["date"]);
        const date2 = new Date(el2["date"]);
        if(payload.isSorting) return date1 - date2;
        else return date2 - date1;
      })];

    default:
      return alertsState;
  }
}