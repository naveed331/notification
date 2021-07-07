const env = process.env.NODE_ENV || "development";

const config = {
  development: {
    siteUrl: "http://localhost:5000",
    port: 5000,

    db: {
      username: "postgres",
      password: "admin",
      database: "swvl",
      host: "localhost",
      port: 5432,
      dialect: "postgres",
      seederStorage: "sequelize",
      logging: true,
    },

    passport: {
      PASSPORT_SECRET: "I_AME_GERER",
    },
  },
  production: {
    siteUrl: "http://localhost:5000",
    port: 3000,

    db: {
      username: "postgres",
      password: "admin",
      database: "swvl",
      host: "127.0.0.1",
      port: 5432,
      dialect: "postgres",
      seederStorage: "sequelize",
    },

    passport: {
      PASSPORT_SECRET: "I_AME_GERER",
    },
  },
};

module.exports = config[env];
