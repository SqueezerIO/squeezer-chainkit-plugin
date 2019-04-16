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
    return new Promise((resolve) => {
      console.log('yey');
      process.exit(0);
      resolve(null, true);
    });
  }
}

module.exports = ChainKit;
