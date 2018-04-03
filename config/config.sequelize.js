'use strict';
const equelize = {
  dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
  database: 'mydb',
  host: '47.52.228.251',
  port: '3306',
  username: 'root',
  password: 'root123',
  define: {
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci',
    },
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
};
module.exports = equelize;
