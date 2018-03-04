import { getAllCharacters } from '../services/HttpRequests';

export const CREATE_HERO_LIST = 'CREATE_HERO_LIST'

function createHeroList(heroList) {
  return {
    type: CREATE_HERO_LIST,
    heroList
  }
}

function requestError() {
  return {
    type: ERROR_HERO_LIST,
  }
}

function requestHeroList(){
  return (dispatch) => {
    getAllCharacters((data) => dispatch(createHeroList(data)), (response) => console.log(response))
  }
}
