import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { Post } from './entities/post.entity';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService, UsersService],
  imports: [
    SequelizeModule.forFeature([Post, User]),
    JwtModule.register({
      secret: 'toto',
    }),
  ],
})
export class PostsModule {}
