import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { PostsService } from "../posts/posts.service";
import { User } from "./entities/user.entity";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
    controllers: [UsersController],
    providers: [UsersService, PostsService],
    imports: [SequelizeModule.forFeature([ User ])]
})
export class UsersModule {}