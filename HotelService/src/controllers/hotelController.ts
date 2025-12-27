import {Request, NextFunction, Response} from "express";
import {HotelService} from "../services/hotelService";

export class HotelController {
  declare private hotelService: HotelService;
  constructor() {
    this.hotelService = new HotelService();
  }
  createHotelHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const hotelResponse = await this.hotelService.createHotel(req.body);

      res.json({
        message: "Hotel successfully created",
        data: hotelResponse,
        success: true
      });
    } catch (error) {
      next(error);
    }
  };
}
