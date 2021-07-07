"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userNotification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.userNotification.belongsTo(models.user, {
        foreignKey: "userId",
      });
      models.userNotification.belongsTo(models.notification, {
        foreignKey: "notificationId",
      });
    }
  }
  userNotification.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      notificationId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "userNotification",
    }
  );
  return userNotification;
};
