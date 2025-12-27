import express from "express";
import {HotelController} from "../controllers/hotelController";
import {schemaValidator} from "../validators";
import {hotelSchema} from "../validators/hotel.validator";
const hotelRouter = express.Router();
const hotelController = new HotelController();
hotelRouter.post("/create", schemaValidator(hotelSchema), hotelController.createHotelHandler);
export default hotelRouter;
