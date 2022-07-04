const got = require('got')

const fetchRepositoryInfo = (path, dothisaftergettingdata) => {
  let url = 'https://api.github.com/repos/' + path
  got(url)
    .then((n) => { 
      dothisaftergettingdata(JSON.parse(n.body))
    });
}

module.exports = fetchRepositoryInfo;



