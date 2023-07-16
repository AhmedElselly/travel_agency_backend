import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BlogInterface } from 'src/intefaces/blogs.interface';

@Injectable()
export class BlogsService {
  constructor(@InjectModel('Blog') private blog: Model<BlogInterface>) {}
  async create(createBlogDto: CreateBlogDto, file:any, res: any): Promise<any> {
    const blog = new this.blog(createBlogDto);
    if(file) {
      blog.image.data = file.buffer;
      blog.image.contentType = file.mimetype;
    }
    await blog.save();
    return res.json(blog);
  }

  async findAll(res: any): Promise<any> {
    const blogs = await this.blog.find().select('-image');
    return res.json(blogs);
  }

  async findOne(id: string, res: any): Promise<any> {
    const blog = await this.blog.findById(id).select('-image');
    return res.json(blog);
  }

  async update(
    id: string,
    updateBlogDto: UpdateBlogDto,
    file: any,
    res: any,
  ): Promise<any> {
    const blog = await this.blog.findById(id);
    blog.title = updateBlogDto.title;
    blog.description = updateBlogDto.description;
    if(file) {
      blog.image.data = file.buffer;
      blog.image.contentType = file.mimetype;
    }
    await blog.save();
    return res.json(blog);
  }

  async remove(id: string, res: any): Promise<any> {
    const blog = await this.blog.findByIdAndRemove(id);
    return res.json({ message: 'Blog has been removed successfully!' });
  }
}
