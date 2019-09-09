'use strict';
module.exports = (sequelize, DataTypes) => {
  const networking = sequelize.define('networking', {
    name: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  networking.associate = function(models) {
    // netowkring events belong to events
    networking.belongsTo(models.event)
  };
  return networking;
};