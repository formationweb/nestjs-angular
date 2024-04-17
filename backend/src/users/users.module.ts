import { Module } from "@nestjs/common";
import { PostsService } from "../posts/posts.service";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
    controllers: [UsersController],
    providers: [UsersService, PostsService]
})
export class UsersModule {}