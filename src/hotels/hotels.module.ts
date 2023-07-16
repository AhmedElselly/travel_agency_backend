import { Module } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { HotelsController } from './hotels.controller';
import {MongooseModule} from '@nestjs/mongoose';
import { hotelSchema } from 'src/schemas/hotel';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Hotel', schema: hotelSchema}])],
  controllers: [HotelsController],
  providers: [HotelsService]
})
export class HotelsModule {}
