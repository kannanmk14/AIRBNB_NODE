import {QueryError} from "sequelize";
import {createHotelDTO} from "../DTO/hotelDTO";
import Hotel from "../db/models/hotel";
import {BaseRepository} from "./baseRepository";

export class HotelRepository extends BaseRepository<Hotel> {
  constructor() {
    super(Hotel);
  }
  async createHotel(hotel: createHotelDTO): Promise<Hotel> {
    const res = await super.createHotel(hotel);
    if (!res) {
      throw new QueryError("Query failed during creation of hotel");
    }
    return res;
  }
}
