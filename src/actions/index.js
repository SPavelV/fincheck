import {TOGGLE_MAIN_NAV_LINK,DELETE_NAV_LINK, EDIT_NAV_LINK_TEXT,TOGGLE_INPUT_EDIT} from '../constants';

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