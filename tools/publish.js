const path = require('path');
const build = require('./build');
const task = require('./task');
const config = require('./config');

module.exports = task('publish', () => {
  const remote = {
    url: 'https://github.com/CollaborationInEncapsulation/collaborationinencapsulation.github.io.git', // TODO: Update deployment URL
    branch: 'master',
  };
  global.DEBUG = process.argv.includes('--debug') || false;
  const spawn = require('child_process').spawn;
  const opts = { cwd: path.resolve(__dirname, './public'), stdio: ['ignore', 'inherit', 'inherit'] };
  const git = (...args) => new Promise((resolve, reject) => {
    spawn('git', args, opts).on('close', code => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`git ${args.join(' ')} => ${code} (error)`));
      }
    });
  });

  return Promise.resolve()
    .then(() => git('init', '--quiet'))
    .then(() => git('config', '--get', 'remote.origin.url')
      .then(() => git('remote', 'set-url', 'origin', remote.url))
      .catch(() => git('remote', 'add', 'origin', remote.url))
    )
    .then(() => git('ls-remote', '--exit-code', remote.url, 'master')
      .then(() => Promise.resolve()
        .then(() => git('fetch', 'origin'))
        .then(() => git('reset', `origin/${remote.branch}`, '--hard'))
        .then(() => git('clean', '--force'))
      )
      .catch(() => Promise.resolve())
    )
    .then(() => build())
    .then(() => git('add', '.', '--all'))
    .then(() => git('commit', '--message', new Date().toUTCString())
    .catch(() => Promise.resolve()))
    .then(() => git('push', 'origin', `HEAD:${remote.branch}`, '--force', '--set-upstream'));
});