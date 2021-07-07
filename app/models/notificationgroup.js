"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class notificationGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.notificationGroup.belongsTo(models.group, {
        foreignKey: "groupId",
      });
      models.notificationGroup.belongsTo(models.notification, {
        foreignKey: "notificationId",
      });
    }
  }
  notificationGroup.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      groupId: {
        type: DataTypes.INTEGER,
      },
      notificationId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "notificationGroup",

    }
  );
  return notificationGroup;
};
