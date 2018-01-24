const ghpages = require('gh-pages');
const chalk = require('chalk')
const BRANCH = 'gh-pages';
const TODAY = new Date().toLocaleString();
const VERSION = process.env.npm_package_version

console.log(chalk.yellow(`start publishing v${VERSION} to ${BRANCH}`));
ghpages.publish('demo/dist', {
  branch: BRANCH,
  message: `Merge v${VERSION} in ${TODAY}`
}, () => {
  console.log(chalk.green(`done publishing v${VERSION} to ${BRANCH}`));
});
