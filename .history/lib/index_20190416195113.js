'use strict';

const Promise = require('bluebird');

/**
 * Class that serves a Squeezer project
 */
class Serve {
  constructor(sqz) {
    this.sqz = sqz;
  }

  deploy() {
    return new Promise((resolve) => {
      console.log('yey');
      process.exit(0);
      resolve(null, true);
    });
  }
}

module.exports = Serve;
