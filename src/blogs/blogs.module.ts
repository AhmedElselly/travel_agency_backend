import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsController } from './blogs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { blogSchema } from 'src/schemas/blogs';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Blog', schema: blogSchema}])],
  controllers: [BlogsController],
  providers: [BlogsService]
})
export class BlogsModule {}
