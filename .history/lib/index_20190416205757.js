'use strict';

const Promise = require('bluebird');
const ChainKit = require('squeezer-chainkit');

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
    const { environment, itnUrl } = chainKit;

    const chainKit = new ChainKit({
      accessKey,
      environment
    }); 

    console.log(this.sqz.provider.vars);
    const fullItnUrl = `${appBaseUrl}${itnUrl}`;

    return new Promise((resolve, reject) => {
      console.log('yey');
      chainKit.configureItnUrl({
        url: ``
      }, (err, response) => {
        if (err) reject(err);
        resolve(null, true);
      });
    });
  }
}

module.exports = ChainKit;
