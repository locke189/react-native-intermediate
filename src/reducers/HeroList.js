import { CREATE_HERO_LIST } from '../actions'

export function heroList(state = [], action) {
  switch (action.type) {
    case CREATE_HERO_LIST:
      return action.heroList;
    default:
      return state;
  }
}
