'use strict';

class SwaggerPlugin {
  constructor(sqz) {
    this.sqz = sqz;

    this.commands = [
      {
        arg         : ['deploy'],
        lifecycle   : [
          'after:deploy:run:swagger:deploy'
        ],
        options     : {}
      }
    ];
  }
}

module.exports = SwaggerPlugin;
