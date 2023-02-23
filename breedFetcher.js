//this app shows you information of cat breeds. type the desired breed into the terminal
const request = require('request');

const fetchBreedDescription = function(breed, callback) {

  //this object handles the parameters of the API
  const searchObj = {
    apiCatBreeds: 'https://api.thecatapi.com/v1/breeds/search',
    query: '?q=',
    catBreed: breed
  };

  //this function requests the cat breads from specified URL
  request(searchObj.apiCatBreeds + searchObj.query + searchObj.catBreed, (error, body) => {
    let data;

    //the if statment prevent the app from crashing if an incorrect URL is provided
    if (body) {
      data = JSON.parse(body.body);
    }
  
    //this if statment handles other errors such as if breed typed in is not found
    if (error || data[0] === undefined) {
      return callback(error = '404', null);
    } else {
      let desc = data[0];
      return callback(null, desc);
    }
  });
};

module.exports = fetchBreedDescription;