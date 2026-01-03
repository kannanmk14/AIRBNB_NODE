import {HotelRepository} from "../repositories/hotelRepository";
import {createHotelDTO} from "../DTO/hotelDTO";

export class HotelService {
  declare private hotelRepository: HotelRepository;

  constructor() {
    this.hotelRepository = new HotelRepository();
  }

  async createHotel(hotel: createHotelDTO) {
    const createdHotel = await this.hotelRepository.createHotel(hotel);
    return createdHotel;
  }

  async getAllHotel() {
    const allHotels = await this.hotelRepository.getAllHotels();
    return allHotels;
  }

  async deleteHotel(hotelId: number): Promise<boolean> {
    const deletedHotel = await this.hotelRepository.deleteHotel(hotelId);
    return deletedHotel != undefined;
  }
}
