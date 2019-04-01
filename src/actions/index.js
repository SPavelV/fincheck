import {TOGGLE_MAIN_NAV_LINK,INCREMENT} from '../constants';

export function increment() {
  return {
    type: INCREMENT
  }
}

export function toggleActiveMainNavLink(id) {
  return {
    type: TOGGLE_MAIN_NAV_LINK,
    payload: { id }
  }
}