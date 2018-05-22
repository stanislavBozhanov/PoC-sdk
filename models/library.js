'use strict';
module.exports = (sequelize, DataTypes) => {
  var Library = sequelize.define('Library', {
    id: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING
  }, {});
  Library.associate = function (models) {
    // associations can be defined here
  };
  return Library;
};
