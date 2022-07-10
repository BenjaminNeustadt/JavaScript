const got = require('got')

const fetchRepositoryInfo = (path, dothisafter) => { 
  got(`https://api.github.com/repos/${path}`)
  .then((n) => dothisafter(JSON.parse(n.body))
)};

module.exports = fetchRepositoryInfo;

// ABOVE IS REFACTORED VERSION
//---------------------------------
  //const fetchRepositoryInfo = (path, dothisafter) => { 
  // let url = 'https://api.github.com/repos/' + path
  // got(url)
  //   .then((n) => {
  //     dothisafter(JSON.parse(n.body))
  //   });
// }

// module.exports = fetchRepositoryInfo;


// What is the difference between fetch and got?
// resources: type in 'https://api.github.com/' to browser and see api return; 
// it is a collection of key value pairs in JSON
// 'https://api.github.com/gists/public' try this