import {Request, Response} from "express";
import logger from "../config/logger";

export const pingHandler = (req: Request, res: Response): void => {
  logger.info(`Start - ${req.headers["X-Correlation-id"]}`);
  res.send("pong");
  logger.info(`End - ${req.headers["X-Correlation-id"]}`);
};

export const pingBaseHandler = (req: Request, res: Response) => {
  logger.info(`Start - ${req.headers["X-Correlation-id"]}`);
  res.status(200).send("OK");
  logger.info(`End - ${req.headers["X-Correlation-id"]}`);
};
