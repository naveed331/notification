const models = require("../models");
const getAllNotification = async (req, res) => {
  try {
    const { userId } = req.body;

    let notifications = await models.notification.findAll({
      attributes: ["title", "message"],
      include: {
        attributes: [],
        model: models.userNotification,
        where: {
          userId,
        },
      },
    });

    return res.status(200).send({
      status: true,
      message: "Notification Send ",
      notifications: notifications,
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
  getAllNotification,
};
