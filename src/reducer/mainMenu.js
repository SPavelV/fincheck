import {mainMenu as dafaultMainMenu} from '../assets/data';
import {TOGGLE_MAIN_NAV_LINK,DELETE_NAV_LINK,EDIT_NAV_LINK_TEXT} from '../constants';

export default (mainMenuState = dafaultMainMenu, action) => {
  const {type, payload} = action;
  switch(type) {
    case TOGGLE_MAIN_NAV_LINK:
      return mainMenuState.map(navLink => {
        if(navLink.id === payload.id) navLink.isActive = 'true';
        else navLink.isActive = 'false'
        return navLink
      });
    case DELETE_NAV_LINK: 
      return mainMenuState
    case EDIT_NAV_LINK_TEXT:
      return mainMenuState
    default :
      return mainMenuState;
  }

  
}