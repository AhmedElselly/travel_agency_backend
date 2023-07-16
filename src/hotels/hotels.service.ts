import { Injectable } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { HotelModel } from 'src/intefaces/hotel.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createHotel } from 'src/seed';

@Injectable()
export class HotelsService {
  constructor(@InjectModel('Hotel') private hotel: Model<HotelModel>) {}
  async create(createHotelDto: CreateHotelDto, res): Promise<any> {
    const hotel = new this.hotel(createHotelDto);
    await hotel.save();
    // uncomment next line to create fake data
    // this.#createFakeData();
    return res.json({ message: 'created successfully!' });
  }

  async findAll(res): Promise<any> {
    const hotels = await this.hotel.find();
    return res.json(hotels);
  }

  findOne(id: string) {
    
  }

  update(id: string, updateHotelDto: UpdateHotelDto) {
    return `This action updates a #${id} hotel`;
  }

  remove(id: string) {

    return `This action removes a #${id} hotel`;
  }

  async #createFakeData(): Promise<any> {
    const seeder = createHotel();
    for (let i = 0; i < 10; i++) {
      const hotel = new this.hotel(seeder);
      await hotel.save();
    }
    return seeder;
  }
}
