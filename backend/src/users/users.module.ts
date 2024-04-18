import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Post } from "../posts/entities/post.entity";
import { PostsService } from "../posts/posts.service";
import { User } from "./entities/user.entity";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
    controllers: [UsersController],
    providers: [UsersService, PostsService],
    imports: [SequelizeModule.forFeature([ User, Post ])]
})
export class UsersModule {}