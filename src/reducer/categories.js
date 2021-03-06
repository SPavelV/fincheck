import {categories} from '../assets/data';
import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  EDIT_CATEGORY
} from '../constants';

export default (state = categories, action) => {
  const {type,payload} = action;
 

  switch(type) {
    case ADD_CATEGORY:
      const newCategory = {...payload};
      console.log('ADD_CATEGORY')
      return [...state, newCategory];
    case DELETE_CATEGORY:
      console.log('DELETE_CATEGORY')
      return state.filter(element => element.id !== payload.id);
    case EDIT_CATEGORY:
      console.log('EDIT_CATEGORY')
      return state.map(element => {
        if(element.id===payload.id) element.name = payload.name;
        return element;
      })
    default: 
      return state;
  }
}