'use strict';

const Promise = require('bluebird');
const ChainKit = require('squeezer-chainkit');

/**
 * Class that serves a Squeezer project
 */
class ChainKitPlugin {
  constructor(sqz) {
    this.sqz = sqz;
  }

  run() {
    const vars = this.sqz.provider.vars;
    const { accessKey, appBaseUrl, chainkit } = vars;
    const { environment, itnUrl } = chainkit;

    const chainKit = new ChainKit({
      accessKey,
      environment
    }); 

    const fullItnUrl = `${appBaseUrl}${itnUrl}`;

    return new Promise((resolve, reject) => {
      chainKit.configureItnUrl({
        url: fullItnUrl
      }, (err, response) => {
        if (err) reject(err);

        resolve(null, true);
      });
    });
  }
}

module.exports = ChainKitPlugin;
