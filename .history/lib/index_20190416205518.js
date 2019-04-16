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
    const { environment } = chainKit;

    const chainKit = new ChainKit({
      accessKey,
      environment
    }); 

    console.log(this.sqz.provider.vars);
    return new Promise((resolve, reject) => {
      console.log('yey');
      chainKit.configureItnUrl({
        url: 'http://example.org/itn/callback'
      }, (err, response) => {
        if (err) reject(err);
        resolve(null, true);
      });
    });
  }
}

module.exports = ChainKit;
