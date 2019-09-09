"use strict";
module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define( "event", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
    }
  );
  // event.associate = function(models) {
  //   // event has many networking events
  //   event.hasOne(models.user);
  // };
  return event;
};
