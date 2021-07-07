const Passport = require("passport");
const PassportJWT = require("passport-jwt");
const config = require("../config");
const models = require("../app/models");

module.exports = {
  configJWTStrategy() {
    const opts = {
      jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.passport.PASSPORT_SECRET,
    };
    Passport.use(
      new PassportJWT.Strategy(opts, (paylod, done) => {
        models.armsuser
          .findOne({ where: { id: paylod.id } })
          .then((user) => {
            return done(null, user);
          })
          .catch((err) => {
            return done(null, false);
          });
      })
    );
  },
};
