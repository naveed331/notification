"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.userGroup.belongsTo(models.user, {
        foreignKey: "userId",
      });
      models.userGroup.belongsTo(models.group, {
        foreignKey: "groupId",
      });
    }
  }
  userGroup.init(
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
      groupId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "userGroup",

    }
  );
  return userGroup;
};
