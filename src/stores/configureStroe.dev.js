import thunk from 'redux-thunk';
import { createStore, compose } from 'redux';
import rootReducer from '../reducers/root';

let store;
export default initialState => {
  if(store) {
    return store;
  }

  const createdStore = createStore(
    rootReducer,
    initialState,
    compose(window.devToolsExtension())
  );
  store = createStore;
  return store;
}