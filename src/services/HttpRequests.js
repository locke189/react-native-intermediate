import axios from 'axios';

const ENDPOINT = 'https://gateway.marvel.com/v1/public/';
const API_KEY = '6e8fd6170783e1ecf8c0e3784c8c00f2';
const HASH = 'effdd68f568a43ae712240c3ce880e86';
const ALL_CHARACTERS = `${ENDPOINT}characters?apikey=${API_KEY}&hash=${HASH}&ts=${1}`;

function getAllCharacters(callback, errorCallback){
  return axios.get(ALL_CHARACTERS)
    .then(({data}) => {
      callback(data.data.results);
    })
    .catch((response) => {
      errorCallback(response);
    })
    ;
}

export { getAllCharacters };
