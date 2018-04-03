'use strict';
// 表模型范例
module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;
  const Movie = app.model.define('Movie', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: STRING(100),
      allowNull: false,
    },
  }, {
    freezeTableName: true,
    tableName: 'z_movie',
    timestamps: false,
    comment: '注释下表名',
  });
  return Movie;
};
