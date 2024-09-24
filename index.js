const data = require('./characters.json');
const characters = data.results;

/**
 * Returns the characters that participated in 3 or more films
 *
 * @return {array.<Object>} array of character objects that participated in 3 or more films
*/
const fetchThreeOrMoreFilmCharacters = () => {


    
};

/**
 * Returns an array of common films given two character names
 *
 * @param {string} characterName1
 * @param {string} characterName2
 * @return {array.string} array of common films for two characters
*/
const fetchCommonFilms = (characterName1, characterName2) => {



};

/**
 * Returns an array of names of the k tallest characters in descending order of height
 *
 * @param {number} k
 * @return {arrray.string} array of k tallest character names in descending order of height
*/
const fetchKTallestCharacters = (k) => {



};

module.exports = {
  fetchThreeOrMoreFilmCharacters,
  fetchCommonFilms,
  fetchKTallestCharacters
};