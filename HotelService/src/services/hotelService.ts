import {HotelRepository} from "../repositories/hotelRepository";
import {createHotelDTO} from "../DTO/hotelDTO";

export class HotelService {
  declare private hotelRepository: HotelRepository;

  constructor() {
    this.hotelRepository = new HotelRepository();
  }

  async createHotel(hotel) {
    const createdHotel = await this.hotelRepository.createHotel(hotel);
    return createdHotel;
  }
}
