import {
  TOGGLE_MAIN_NAV_LINK,
  DELETE_NAV_LINK, 
  EDIT_NAV_LINK_TEXT,
  TOGGLE_INPUT_EDIT,
  ADD_ALERT_ITEM,
  DEL_ALERT_ITEM,
  SORT_DATE_ALERTS_ITEM
} from '../constants';

export function toggleActiveMainNavLink(id) {
  return {
    type: TOGGLE_MAIN_NAV_LINK,
    payload: { id }
  }
}

export function deleteMainNavLink(id) {
  return {
    type: DELETE_NAV_LINK,
    payload: { id }
  }
}

export function editMainNavLinkText(id,text) {
  return {
    type: EDIT_NAV_LINK_TEXT,
    payload: { id,text }
  }
}

export function toggleInputEdit(id) {
  return {
    type: TOGGLE_INPUT_EDIT,
    payload: { id }
  }
}

export function addAlertItem(id) {
  return {
    type: ADD_ALERT_ITEM,
    payload: { id }
  }
}

export function delAlertItem(id) {
  return {
    type: DEL_ALERT_ITEM,
    payload: { id }
  }
}

export function sortDateAlertsItem(isSorting) {
  console.log('sortDateAlertsItem');
  console.log('isSorting',isSorting);
  return {
    type: SORT_DATE_ALERTS_ITEM,
    payload: { isSorting }
  }
}