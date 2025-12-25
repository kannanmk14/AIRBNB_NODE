import {NextFunction, Request, Response} from "express";
import {v4 as uuidV4} from "uuid";

const correlationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const correlationId = uuidV4();

  req.headers["X-Correlation-id"] = correlationId;

  next();
};

export default correlationMiddleware;
