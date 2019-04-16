'use strict';

const Promise = require('bluebird');
const ChainKit = require('squeezer-chainkit');
const chainKit = new ChainKit(options); 

/**
 * Class that serves a Squeezer project
 */
class ChainKit {
  constructor(sqz) {
    this.sqz = sqz;
  }

  run() {
    const vars = this.sqz.provider.vars;
    const { accessKey, appBaseUrl, chainKit } = vars;

    console.log(this.sqz.provider.vars);
    return new Promise((resolve) => {
      console.log('yey');
      resolve(null, true);
    });
  }
}

module.exports = ChainKit;
