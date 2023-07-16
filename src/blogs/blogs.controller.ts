import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseInterceptors, UploadedFile } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('api/blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post('/create')
  @UseInterceptors(FileInterceptor('image'))
  create(@Body() createBlogDto: CreateBlogDto, @UploadedFile() file: Express.Multer.File, @Res() res: Response) {
    return this.blogsService.create(createBlogDto, file, res);
  }

  @Get()
  findAll(@Res() res: Response) {
    return this.blogsService.findAll(res);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() res: Response) {
    return this.blogsService.findOne(id, res);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('image'))
  update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto, @UploadedFile() file: Express.Multer.File, @Res() res: Response) {
    return this.blogsService.update(id, updateBlogDto, file, res);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() res: Response) {
    return this.blogsService.remove(id, res);
  }
}
