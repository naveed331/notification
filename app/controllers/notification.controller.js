const models = require("../models");
let countFunction = require("../utils/cronJob");
var notification = require("./notificationSend");
const sendNotification = async (req, res) => {
  try {
    const { userId, title, message } = req.body;
    countFunction.updateCounts(1, 1);
    const result = countFunction.counts();
    if (result.NOTIFICATION_COUNTS > 1300) {
      return res.status(400).send({
        status: false,
        message: "limit exceeds",
      });
    }
    let tokens = await models.user.findOne({
      attributes: ["deviceToken"],
      where: {
        id: userId,
      },
    });
    let deviceToken = tokens.dataValues.deviceToken;

    let check = notification.senNotification(deviceToken, title, message);

    if (!check) {
      return res.status(500).send({
        status: false,
        message: "Notification Not Send",
      });
    }
    console.log("I am Here akjsbdi");

    let addNotification = await models.notification.create({
      title,
      message,
    });
    let addUserNotification = await models.userNotification.create({
      notificationId: addNotification.dataValues.id,
      userId: userId,
    });
    return res.status(200).send({
      status: true,
      message: "Notification Send ",
      user: addUserNotification,
    });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: "Internal server error",
      error: error,
    });
  }
};
module.exports = {
  sendNotification,
};
