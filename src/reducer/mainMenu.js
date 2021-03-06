import {
  mainMenu as dafaultMainMenu
} from '../assets/data';
import {
  TOGGLE_MAIN_NAV_LINK,
  DELETE_NAV_LINK,
  EDIT_NAV_LINK_TEXT,
  TOGGLE_INPUT_EDIT
} from '../constants';

export default (mainMenuState = dafaultMainMenu, action) => {
  const {
    type,
    payload
  } = action;
  switch (type) {
    case TOGGLE_MAIN_NAV_LINK:
      return mainMenuState.map(navLink => {
        if (navLink.id === payload.id) navLink.isActive = 'true';
        else navLink.isActive = 'false'
        return navLink
      });
    case TOGGLE_INPUT_EDIT:
      return mainMenuState.map(navLink => {
        if (navLink.id === payload.id && navLink.editInputOpen ==='false') navLink.editInputOpen = 'true';
        else if(navLink.id === payload.id && navLink.editInputOpen ==='true') navLink.editInputOpen = 'false'
        else navLink.editInputOpen = 'false'
        return navLink
      });
    case DELETE_NAV_LINK:
      return mainMenuState.filter(navLink => navLink.id !== payload.id);
    case EDIT_NAV_LINK_TEXT:
      return mainMenuState.map(navLink => {
        if (navLink.id === payload.id) navLink.text = payload.text;
        return navLink;
      })
    default:
      return mainMenuState;
  }


}