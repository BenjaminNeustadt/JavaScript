const got = require('got')


class GithubAPi {

  fetchRepositoryData(path, dothisafter) {
    let url = 'https://api.github.com/repos/' + path
    got(url)
      .then((n) => {
        dothisafter(JSON.parse(n.body))
      });
  }

}


module.exports = GithubAPi;
