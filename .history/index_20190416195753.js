'use strict';

class SwaggerPlugin {
  constructor(sqz) {
    this.sqz = sqz;

    this.commands = [
      {
        arg         : ['deploy'],
        lifecycle   : [
          'after:deploy:run:chainkit:deploy'
        ],
        options     : {}
      }
    ];
  }
}

module.exports = SwaggerPlugin;
