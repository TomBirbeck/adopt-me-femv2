import { combineReducers } from 'redux';
import location from './location.js';
import breed from './breed.js';
import theme from './theme.js';
import animal from './animal.js';

export default combineReducers({
  location,
  breed,
  animal,
  theme,
});
