var CronJob = require("cron").CronJob;
let NOTIFICATION_COUNTS = 0;
let SMS_COUNTS = 0;

module.exports = {
  cronJob() {
    var job = new CronJob(
      "1 * * * * *",
      function () {
        console.log("You will see this message every Minute");
        NOTIFICATION_COUNTS = 0;
        SMS_COUNTS = 0;
      },
      null,
      true,
      "America/Los_Angeles"
    );
    job.start();
  },
  counts() {
    return { NOTIFICATION_COUNTS, SMS_COUNTS };
  },
  updateCounts(sms, notification) {
    NOTIFICATION_COUNTS = NOTIFICATION_COUNTS + notification;
    SMS_COUNTS = SMS_COUNTS + sms;
  },
};
