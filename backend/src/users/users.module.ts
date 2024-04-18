import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { Post } from '../posts/entities/post.entity';
import { PostsService } from '../posts/posts.service';
import { User } from './entities/user.entity';
import { MeController } from './me.controller';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController, MeController],
  providers: [UsersService, PostsService],
  imports: [
    SequelizeModule.forFeature([User, Post]),
    JwtModule.register({
      secret: process.env.JWT_SECRET_TOKEN,
    }),
  ],
})
export class UsersModule {}
