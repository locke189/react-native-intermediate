import { combineReducers } from 'redux';
import { heroList } from './HeroList';

export const rootReducer = combineReducers({
  heroList,
})
