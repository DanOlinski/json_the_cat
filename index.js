const fetchBreedDescription = require('./breedFetcher');
const cmdInput = process.argv.slice(2);


fetchBreedDescription(cmdInput[0], (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});