import express from "express";
import pingRouter from "./pingRouter.router";
import hotelRouter from "./hotel.router";

const router = express.Router();

router.use("/", pingRouter);
router.use("/hotel", hotelRouter);

export default router;
