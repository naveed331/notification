"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.notification.hasMany(models.userNotification, {
        foreignKey: "notificationId",
      });
      models.notification.hasMany(models.notificationGroup, {
        foreignKey: "notificationId",
      });
    }
  }
  notification.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING,
      },
      message: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "notification",

    }
  );
  return notification;
};
