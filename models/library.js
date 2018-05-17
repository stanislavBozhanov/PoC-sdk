'use strict';
module.exports = (sequelize, DataTypes) => {
  var Library = sequelize.define('Library', {
    uuid: DataTypes.UUID,
    name: DataTypes.STRING
  }, {});
  Library.associate = function (models) {
    // associations can be defined here
  };
  return Library;
};
