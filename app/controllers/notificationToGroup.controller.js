const models = require("../models");
let countFunction = require("../utils/cronJob");
var notification = require("./notificationSend");
const sendNotification = async (req, res) => {
  try {
    const { groupId, title, message } = req.body;

    let tokens = await models.user.findAll({
      attributes: ["deviceToken"],
      include: {
        required: true,
        model: models.userGroup,
        where: {
          groupId: groupId,
        },
      },
    });

    let deviceToken = [];
    for (let i = 0; i < tokens.length; i++) {
      deviceToken.push(...tokens[i].dataValues.deviceToken);
    }

    countFunction.updateCounts(deviceToken.length, deviceToken.length);
    const result = countFunction.counts();
    if (result.NOTIFICATION_COUNTS > 1300) {
      return res.status(400).send({
        status: false,
        message: "limit exceeds",
      });
    }
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
    let addUserNotification = await models.notificationGroups.create({
      notificationId: addNotification.dataValues.id,
      groupId: groupId,
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
