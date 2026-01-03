import {Request, NextFunction, Response} from "express";
import {HotelService} from "../services/hotelService";
import {StatusCodes} from "http-status-codes";
import Hotel from "../db/models/hotel";

export class HotelController {
  declare private hotelService: HotelService;
  constructor() {
    this.hotelService = new HotelService();
  }
  createHotelHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const hotelResponse: Hotel = await this.hotelService.createHotel(req.body);

      res.status(StatusCodes.CREATED).json({
        message: "Hotel successfully created",
        data: hotelResponse,
        success: true
      });
    } catch (error) {
      next(error);
    }
  };

  getAllHotelHandler = async (req: Request, res: Response, next: NextFunction) => {
    const allHotelResponse: Hotel | null = await this.hotelService.getAllHotel();
    res.status(StatusCodes.OK).json({
      message: "Hotels found successfully",
      data: allHotelResponse,
      success: true
    });
  };

  deleteHotelHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deletedHotel: boolean = await this.hotelService.deleteHotel(Number.parseInt(req.params.id));
      res.status(StatusCodes.OK).json({
        message: "Hotel deleted successfully",
        data: deletedHotel,
        success: true
      });
    } catch (e) {
      next(e);
    }
  };
}
