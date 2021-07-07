module.exports.senNotification = function (deviceToken, title, msg) {
  var notification = {
    title: title,
    text: msg,
  };
  var fcm_tokens = deviceToken;
  var notification_body = {
    notification: notification,
    registration_ids: fcm_tokens,
  };
  fetch("https://fcm.googleapis.com/fcm/send", {
    method: "POST",
    headers: {
      Authorization: "key=" + process.env.FCM_SERVER_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(notification_body),
  })
    .then((msg) => {
      return true;
    })
    .catch((err) => {
      return false;
    });
};
