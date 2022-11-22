import { createStore } from 'redux';
import reducer from './reducers.js';

const store = createStore(
  reducer,
  //this enables redux dev tools
  typeof window === 'object' &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

export default store;
