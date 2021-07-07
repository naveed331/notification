const jwt = require("jsonwebtoken");
const config = require("../config");

module.exports = {
  issue(payload, expiresIn) {
    return jwt.sign(payload, config.passport.PASSPORT_SECRET, {
      expiresIn,
    });
  },
};
