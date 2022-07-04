const got = require('got')


class GithubAPi {

  // constructor(path, dothisafter) {
  //   this.path = path
  //   this.dothisafter = dothisafter
  //   this.url = 'https://api.github.com/repos/'
  // }

  fetchRepositoryData(path, dothisafter) {
    let url = 'https://api.github.com/repos/' + path
    got(url)
      .then((n) => { 
        dothisafter(JSON.parse(n.body))
      });
  }

}


module.exports = GithubAPi;