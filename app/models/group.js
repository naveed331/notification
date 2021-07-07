"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.group.hasMany(models.userGroup, {
        foreignKey: "groupId",
      });
      models.group.hasMany(models.notificationGroup, {
        foreignKey: "groupId",
      });
    }
  }
  group.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      groupName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "group",

    }
  );
  return group;
};
