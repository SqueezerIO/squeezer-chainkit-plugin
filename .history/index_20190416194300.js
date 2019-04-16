'use strict';

class SwaggerPlugin {
  constructor(sqz) {
    this.sqz = sqz;

    this.commands = [
      {
        arg         : ['deploy'],
        lifecycle   : [
          'before:deploy:run:chainkit:deploy'
        ],
        options     : {}
      }
    ];
  }
}

module.exports = SwaggerPlugin;
