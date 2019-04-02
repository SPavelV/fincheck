import {combineReducers} from 'redux';
import mainMenuReducer from './mainMenu';

export default combineReducers({
  mainMenu: mainMenuReducer
})