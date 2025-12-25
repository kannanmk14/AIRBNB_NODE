import express from "express";
import pingRouter from "./pingRouter.router";

const router = express.Router();

router.use("/", pingRouter);

export default router;
