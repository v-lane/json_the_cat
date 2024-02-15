const request = require('request');

const URL = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function(breedName, callback) {
  const searchUrl = URL + breedName;
  request.get(searchUrl, (error, _response, body) => {
    if (error) {
      callback(error, null);
    }
    try {
      const data = JSON.parse(body);
      const description = data[0].description;
      callback(null, description);
    } catch (error) {
      callback(error, null);
    }
  });
};


module.exports = { fetchBreedDescription };
