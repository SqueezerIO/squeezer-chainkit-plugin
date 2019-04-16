'use strict';

const Promise = require('bluebird');

/**
 * Class that serves a Squeezer project
 */
class ChainKit {
  constructor(sqz) {
    this.sqz = sqz;
  }

  run() {
    const vars = this.sqz.vars.project.vars;;
    console.log(this.sqz);
    return new Promise((resolve) => {
      console.log('yey');
      process.exit(0);
      resolve(null, true);
    });
  }
}

module.exports = ChainKit;
