import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { User } from '../users/entities/user.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private postModel: typeof Post) {}

  findAll(search?: string) {
    const options: any = {};
    if (search) {
      options.where = {
        title: {
          [Op.like]: `%${search}%`
        }
      }
    }
    return this.postModel.findAll({
      include: [User],
      ...options
    });
  }

  findOne(id: number) {
    return this.postModel.findByPk(id);
  }

  create(payload: CreatePostDto & { userId: number }) {
    return this.postModel.create(payload as any);
  }
}
