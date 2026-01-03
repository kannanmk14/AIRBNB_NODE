import express from "express";
import {type Express} from "express";
import {loadConfig, serverConfig} from "./config";
import sequelize from "./db/models/sequelize";
import router from "./router/index.router";
import {genericErrorMiddleware} from "./middlewares/error.middleware";
import logger from "./config/logger";
import i18n from "i18n";
import correlationMiddleware from "./middlewares/correlation.middleware";

const app: Express = express();

loadConfig();
app.use(express.json());

app.use(correlationMiddleware);
app.use(genericErrorMiddleware);
initializeI18n();
app.use(i18n.init);
app.use("/api/v1", router);

app.listen(serverConfig.PORT, async () => {
  logger.info(`app is up and running ${serverConfig.PORT}`, {msg: serverConfig.PORT});
  await sequelize.authenticate();
  logger.info(`Database successfully connected`);
});

function initializeI18n() {
  i18n.configure({
    locales: ["en"],
    directory: __dirname + "/locales"
  });
}
