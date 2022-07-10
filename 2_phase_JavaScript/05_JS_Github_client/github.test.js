const Github = require('./github');
const GithubApi = require('./githubApi');

describe('github.fetch', () => {
  it ('This method will delegate to GithubApi.fetchRepositoryData()', () => {
    const api = new GithubApi();
    const result_2 = api.fetchRepositoryData('sinatra/sinatra', (repositoryData) => {
        return (repositoryData);
    });
    const github = new Github(api);

    const result_1 = github.fetch('sinatra/sinatra');

    expect(result_1).toBe(result_2);
  });
});

