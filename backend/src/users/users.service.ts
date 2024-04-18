import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Transaction } from 'sequelize';
import { Post } from '../posts/entities/post.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  findAll(): Promise<User[]> {
    return this.userModel.findAll({
      include: [Post],
      attributes: { exclude: ['password'] },
    });
  }

  findOne(id: number, transaction?: Transaction): Promise<User> {
    return this.userModel.findByPk(id, {
      include: [Post],
      attributes: { exclude: ['password'] },
      transaction,
    });
  }

  findByEmail(email: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        email
      }
    })
  }

  create(payload: CreateUserDto): Promise<User> {
    return this.userModel.create(payload as any);
  }

  async delete(id: number) {
    const transaction = await this.userModel.sequelize.transaction();
    try {
      const user = await this.findOne(id, transaction);
      if (user.posts.length > 0) {
        await Promise.all([
          user.posts.map((post) =>
            post.destroy({
              transaction,
            }),
          ),
        ]);
      }
      await user.destroy({
        transaction,
      });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err
    }
  }
}
