// "use strict";

const express = require("express");
const passport = require("passport");
const morgan = require("morgan");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
require("express-async-errors");

const configJWTStrategy = require("./middleware/passport-jwt");
const config = require("./config");
const routes = require("./app/routes/routers");
const cronJob = require("./app/utils/cronJob");

cronJob.cronJob();
// For Swagger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CCD API's",
      version: "1.0.0",
      description: "SWVL Notification Backend API's (Nodejs)",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./app/routes/routers.js"],
};

const specs = swaggerJsDoc(options);

const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use(express.json());

//Passport Strategy
app.use(passport.initialize());
configJWTStrategy.configJWTStrategy();
//morgan for status OR Logger
app.use(morgan("dev"));

app.use("/api/swvlTest", routes);

//morgan for status OR Logger
app.use(morgan("dev"));

app.listen(config.port, (error) => {
  if (error) {
    logger.error("Unable to listen for connections", error);
    process.exit(1);
  }

  console.log(`express is listening on http://localhost:${config.port}`);
});
