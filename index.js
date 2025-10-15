const chalk = require('chalk').default;

module.exports = function () {
  console.log(chalk.blue('Computing...'));
  return 2 * 2;
};
