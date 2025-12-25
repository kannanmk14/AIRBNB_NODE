import express from "express";
import {pingHandler, pingBaseHandler} from "../controllers/pingController";
import {schemaValidator} from "../validators";
import {z} from "zod";
import {pingSchema} from "../validators/ping.validator";

const pingRouter = express.Router();

pingRouter.get("/health", pingBaseHandler);

pingRouter.get("/ping", schemaValidator(pingSchema), pingHandler);

export default pingRouter;
