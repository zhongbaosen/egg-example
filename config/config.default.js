'use strict';
const sequelizeConfig = require('./config.sequelize');
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1522028152099_6069';
  config.noPrefix = true;

  // add your config here
  config.middleware = [];

  config.sequelize = sequelizeConfig;
  return config;
};
