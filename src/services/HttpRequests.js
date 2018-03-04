import axios from 'axios';

const ENDPOINT = 'http://gateway.marvel.com/v1/public/'
const API_KEY = '6e8fd6170783e1ecf8c0e3784c8c00f2'
const ALL_CHARACTERS = `${ENDPOINT}/characters?apikey=${API_KEY}`;

function getAllCharacters(callback, errorCallback){
  return axios
    .get(ALL_CHARACTERS)
    .then(({data}) => callback(data))
    .catch((response) => errorCallback(response))
    ;
}

export { getAllCharacters };
