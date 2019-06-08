import {OptionsForSelectAddTransacton} from '../assets/data';
import {
  ADD_OPTIONS_FOR_SELECT_FORM
} from '../constants';

export default (state = OptionsForSelectAddTransacton, action) => {
  const {
    type,
    payload
  } = action;

  switch(type) {
    case ADD_OPTIONS_FOR_SELECT_FORM:
      const {typeTransaction, name} = payload;
      return state;
    default: 
      return state;
      
  }
}
