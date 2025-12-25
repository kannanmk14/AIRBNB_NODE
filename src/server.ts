import express from "express";
import {type Express} from "express";
import {loadConfig, serverConfig} from "./config";
import router from "./router/index.router";
import {z} from "zod";
import {genericErrorMiddleware} from "./middlewares/error.middleware";
import logger from "./config/logger";
import correlationMiddleware from "./middlewares/correlation.middleware";

const app: Express = express();
loadConfig();

app.use(correlationMiddleware);
app.use(genericErrorMiddleware);
app.use("/api/v1", router);

app.listen(serverConfig.PORT, () => {
  logger.info(`app is up and running ${serverConfig.PORT}`, {msg: serverConfig.PORT});
});
