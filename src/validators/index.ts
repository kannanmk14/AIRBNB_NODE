import {ZodObject} from "zod";
import {NextFunction, Request, Response} from "express";
import logger from "../config/logger";

export const schemaValidator = (schema: ZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parseAsync(req.body);
      logger.info("Request body is valid", {correlationId: req.headers["X-Correlation-id"]});
      next();
    } catch (e) {
      return;
    }
  };
};
