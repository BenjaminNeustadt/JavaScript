// Load the `got` function.
const got = require('got');

// Create a "handler" callback function.
const handleReceivedResponse = (response) => {
  const responseObject = JSON.parse(response.body);
  console.log(responseObject);
}

got('https://api.github.com/repos/sinatra/sinatra').then(handleReceivedResponse);


// Call `got` and provide the handler callback function.
// This will get called by `got` when the response is received.
// got(url).then(handleReceivedResponse);


// We can also rewrite the above using a shorter version,
// by defining the "handler" function as an anonymous function

// got(url)
//   .then((response) => {
//     console.log(response.body);
//   });


https://api.github.com/repos/sinatra/sinatra

const fetchRepositoryInfo = require('./fetchRepositoryInfo');

fetchRepositoryInfo('sinatra/sinatra', (receivedResponse) => {
  console.log(receivedResponse);
});

fetchRepositoryInfo('https://api.github.com/repos/sinatra/sinatra', (receivedResponse) => {
  console.log(receivedResponse);
});