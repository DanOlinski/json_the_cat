//this app shows you information of cat breed. you can seach for the desired cat breed from the command line
const request = require('request');
const cmdInput = process.argv.slice(2);

//this object handles the parameters of the API
const searchObj = {
  apiCatBreeds: 'https://api.thecatapi.com/v1/breeds/search',
  query: '?q=',
  breed: cmdInput[0],
};

//this function requests the cat breads from specified URL
request(searchObj.apiCatBreeds + searchObj.query + searchObj.breed, (error, body) => {
  let data;

  //the if statment prevent the app from crashing if an incorrect URL is provided
  if (body) {
    data = JSON.parse(body.body);
  }
  
  //this if statment handles other errors such as breed tiped in not found
  if (error || data[0] === undefined) {
    return console.log('error 404: page not found');
  } else {
    return console.log(data[0]);
  }
});