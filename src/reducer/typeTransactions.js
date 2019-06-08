import {transactionsType} from '../assets/data';
import {
  ADD_TYPE_TRANSACTION,
  DELETE_TYPE_TRANSACTION,
  EDIT_TYPE_TRANSACTION
} from '../constants';


export default (state = transactionsType, action) => {
  const {type,payload} = action;
 
  switch(type) {
    case ADD_TYPE_TRANSACTION:
      console.log('ADD_TYPE_TRANSACTION');
      const newType = {...payload};
      const currentArr = state.filter(element => element.category === payload.category);
      return [currentArr, ...newType];
    case DELETE_TYPE_TRANSACTION:
      console.log('DELETE_TYPE_TRANSACTION');
      return state.filter(element => element.id !== payload.id)
    case EDIT_TYPE_TRANSACTION:
      console.log('EDIT_TYPE_TRANSACTION');
      return state.map(element => {
        if(element.id === payload.id) element.name = payload.name;
        return element;
      })
    default:
      return state;
  }
}