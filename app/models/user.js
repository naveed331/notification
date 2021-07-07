"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.user.hasMany(models.userNotification, {
        foreignKey: "userId",
      });
      models.user.hasMany(models.userGroup, {
        foreignKey: "userId",
      });
    }
  }
  user.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      type: DataTypes.STRING,
      deviceToken: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
    },

    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
