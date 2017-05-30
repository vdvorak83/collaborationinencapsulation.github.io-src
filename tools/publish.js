const path = require('path');
const task = require('./task');
const build = require('./build');
const rimraf = require('rimraf');
const git = require('simple-git')(path.resolve('./public'));
const fs = require('fs');

module.exports = task('deploy', () => {
  const repo = 'CollaborationInEncapsulation/collaborationinencapsulation.github.io';
  const credentialsFilename = path.resolve(process.env.HOME, '.git-credentials');
  rimraf.sync('public/*', { nosort: true, dot: true });

  return git
    .init()
    .addRemote('origin', `https://github.com/${repo}.git`)
    .addConfig('user.name', 'Deployment Bot')
    .addConfig('user.email', 'deploy@travis-ci.org')
    .then(() =>
      new Promise((r, rj) => fs.writeFile(
        credentialsFilename,
        `https://${process.env.GITHUB_TOKEN}:@github.com/${repo}.git`,
        (e) => {
          if (e) {
            rj(e);
          }
          r();
        })).then(() => git
        .addConfig('credential.username', process.env.GITHUB_TOKEN)
        .addConfig('credential.helper', 'store')
        .fetch('origin', 'master')
        .reset('hard FETCH_HEAD')
        .pull('origin', 'master')
        .then(() => build().then(() => git
          .add('dist/*')
          .add('./*')
          .commit(`${Date.now()}`)
          .push('origin', 'master')))));
});
