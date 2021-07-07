var passport = require("passport");
const passportJwt = require("./passport-jwt");
const isLogin = async (req, res, next) => {
  console.log("\n\nUser Requesting ", req.headers.authorization);
  await passportJwt.configJWTStrategy();
  passport.authenticate("jwt", { session: true }, function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).send({
        status: false,
        message: "User UnAuthorized! Login Again",
      });
    }
    req.user = user;
    next();
  })(req, res, next);
};

module.exports = isLogin;
