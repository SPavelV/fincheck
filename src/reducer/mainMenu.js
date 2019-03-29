import {mainMenu as dafaultMainMenu} from '../assets/data';

export default (mainMenuState = dafaultMainMenu, action) => {
  // const {type} = action;
  switch(action.type) {
    case 'DELETE_NAV_LINK': 
      return mainMenuState
  }

  return mainMenuState;
}