const express = require("express");
const router = express.Router();
const notifications = require("../controllers/notification.controller");
const groupNotifications = require("../controllers/notificationToGroup.controller");
const getAllNotifications = require("../controllers/getAllNotification");

/**
 * @swagger
 *
 * /api/swvlTest/notifications/group:
 *   post:
 *     produces:
 *       - application/json
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               groupId:
 *                 type: integer
 *               title:
 *                 type: string
 *               type:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: Record Found.
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       400:
 *         description: Error from user end.
 *       500:
 *         description: Internal Server Error.
 */
router.post("/notifications/group", groupNotifications.sendNotification); //Notification Send To Group of User

/**
 * @swagger
 *
 * /api/swvlTest/notifications/{userId}:
 *   post:
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Record Found.
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       400:
 *         description: Error from user end.
 *       500:
 *         description: Internal Server Error.
 */

router.post("/notifications/:userId", notifications.sendNotification); //Notification Send to indvidual User

/**
 * @swagger
 *
 * /api/swvlTest/customers/notifications/{lang}:
 *   get:
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: lang
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Record Found.
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       400:
 *         description: Error from user end.
 *       500:
 *         description: Internal Server Error.
 */
router.get(
  "/customers/notifications/:lang",
  getAllNotifications.getAllNotification
); //Notification Send To Group of User

module.exports = router;
