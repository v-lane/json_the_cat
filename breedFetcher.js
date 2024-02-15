const request = require('request');

const URL = "https://api.thecatapi.com/v1/breeds/search?q=";

const getSearchUrl = (anyURL, searchCriteria) => {
  return anyURL + searchCriteria;
};

const userInput = process.argv[2];

const searchUrl = getSearchUrl(URL, userInput);

request.get(searchUrl, (error, response, body) => {

  if (error) {
    console.log("*** REQUEST FAILED *** \nURL does not exist. \nError details:", error);
  } else {
    const data = JSON.parse(body);
    if (data === " ") {
      console.log(`nothing data`);
    }
    try {
      const description = data[0].description;
      console.log(description);
    } catch (error) {
      console.log("This cat breed does not exist.");
    }
  }
});