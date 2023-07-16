import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelsModule } from './hotels/hotels.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogsModule } from './blogs/blogs.module';

@Module({
  imports: [HotelsModule, MongooseModule.forRoot('mongodb://localhost:27017/travel_agency'), BlogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
