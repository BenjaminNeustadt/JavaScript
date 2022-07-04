const got = require('got')

const fetchJson = (url, dothisaftergettingdatafirstusingkeywordthen) => {
  got(url).then((n) => { dothisaftergettingdatafirstusingkeywordthen(n)});
}

module.exports = fetchJson;

// the keyword then() is crucial, else it would happen all at once.

// callbackFunction

// // when runnning in node we do not need the 'function' keyword; we have already
// called it so previously in the fetchJson.js file we require. 

// // anonymous function. 
// // function without name: 
//,,,,,,,,,,,,,,,,,,,,,,,,,,,
// (response) => {
//   console.log(response);
// }
//```````````````````````````
//,,,,,,,,,,,,,,,,,,,,,,,,,,,
// const number_1 = 3                    \
// const number_2 = (response) => {       } These are both assigned values
//   console.log(response);              /
// }
//``````````````````````````````
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// () => {                       \
//                                } This is already a function, just empty. 
// }                             /
//```````````````````````````````
// 