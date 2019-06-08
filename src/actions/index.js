import {
  TOGGLE_MAIN_NAV_LINK,
  DELETE_NAV_LINK, 
  EDIT_NAV_LINK_TEXT,
  TOGGLE_INPUT_EDIT,
  ADD_ALERT_ITEM,
  DEL_ALERT_ITEM,
  SORT_DATES_ALERTS_ITEM,
  ADD_TRANSACTION,
  REMOVE_TRANSACTION,
  EDITING_TRANSACTION,
  CREATE_TRANSACTIONS_CATEGORY,
  CREATE_DATA_TRANSACTION_DETAIL,
  DELETE_DATA_TRANSACTION_DETAIL,
  CREATE_SELECT_TRANSACTION_ITEM,
  CREATE_DATA_TRANSACTION_DETAIL_AFTER_SAERCH,
  CREATE_DATA_SEARCH_DETAIL_TRANSACTION,
  DELETE_DATA_SEARCH_DETAIL_TRANSACTION,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  EDIT_CATEGORY
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
  return {
    type: SORT_DATES_ALERTS_ITEM,
    payload: { isSorting }
  }
}

export function addTransaction() {
  return {
    type: ADD_TRANSACTION
  }
}

export function removeTransaction() {
  return {
    type: REMOVE_TRANSACTION
  }
}

export function editignTransaction() {
  return {
    type: EDITING_TRANSACTION
  }
}

export function createDataTransactionDetail(payload) {
  return {
    type: CREATE_DATA_TRANSACTION_DETAIL,
    payload
  }
}

export function createDataTransactionDetailAfterSearch(payload) {
  return {
    type: CREATE_DATA_TRANSACTION_DETAIL_AFTER_SAERCH,
    payload
  }
}

export function deleteDataTransactionDetail() {
  return {
    type: DELETE_DATA_TRANSACTION_DETAIL,
  }
}

export function createSelectTransactionItem(payload) {
  return {
    type: CREATE_SELECT_TRANSACTION_ITEM,
    payload
  }
}

export function createDataSearchDetail(payload) {
  return {
    type: CREATE_DATA_SEARCH_DETAIL_TRANSACTION,
    payload
  }
}


export function deleteDataSearchDetail() {
  return {
    type: DELETE_DATA_SEARCH_DETAIL_TRANSACTION
  }
}

export function addCategoryTransaction(payload) {
  return {
    type: ADD_CATEGORY,
    payload
  }
}

export function deleteCategoryTransaction(payload) {
  return {
    type: DELETE_CATEGORY,
    payload
  }
}

export function editCategoryTransaction(payload) {
  return {
    type: EDIT_CATEGORY,
    payload
  }
}
