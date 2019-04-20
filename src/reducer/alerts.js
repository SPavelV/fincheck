import {alerts} from '../assets/data';
import {
  ADD_ALERT_ITEM,
  DEL_ALERT_ITEM
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
    default:
      return alertsState;
  }
}