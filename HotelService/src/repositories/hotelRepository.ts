import {QueryError, where} from "sequelize";
import {createHotelDTO} from "../DTO/hotelDTO";
import Hotel from "../db/models/hotel";
import {BaseRepository} from "./baseRepository";
import i18n from "i18n";
import logger from "../config/logger";

export class HotelRepository extends BaseRepository<Hotel> {
  constructor() {
    super(Hotel);
  }
  async createHotel(hotel: createHotelDTO): Promise<Hotel> {
    logger.info("started creating hotel in repository");
    const res = await super.create(hotel);
    if (!res) {
      logger.info("Query failed during creation of hotel");
      throw new QueryError("Query failed during creation of hotel");
    }
    logger.info("hotel created successfully in repository");
    return res;
  }

  async getAllHotels(): Promise<Hotel | null> {
    logger.info("Fetching all hotels from repository");
    const allHotels = await this.model.findAll({where: {deletedAt: null}});
    if (!allHotels) {
      logger.info(i18n._("queryFailedFetchingAllHotels"));
      throw new QueryError(i18n._("queryFailedFetchingAllHotels"));
    }
    logger.info("Fetched all hotels successfully from repository");
    return allHotels;
  }

  async getHotelById(hotelId: number): Promise<Hotel | null> {
    logger.info("fetching hotel by id from repository");
    const hotel = await super.findById(hotelId);
    if (!hotel) {
      logger.info(i18n._("hotelNotFound"));
      throw new QueryError(i18n._("hotelNotFound"));
    }
    logger.info("Hotel fetched successfully by id from repository");
    return hotel;
  }

  async deleteHotel(hotelId: number): Promise<boolean> {
    logger.info("deleting hotel in repository");
    const hotel = await super.findById(hotelId);
    if (!hotel) {
      throw new QueryError(i18n._("hotelNotFound"));
    }
    if (hotel.deletedAt != null) {
      throw new QueryError("Hotel already deleted");
    }
    hotel.deletedAt = new Date();
    await hotel?.save();
    logger.info("hotel deleted successfully in repository");
    return true;
  }
}
