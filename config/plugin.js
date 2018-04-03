'use strict';

// had enabled by egg
// exports.static = true;

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};
exports.security = {
  csrf: false,
  enable: false,
};
exports.validate = {
  enable: true,
  package: 'egg-validate',
};
