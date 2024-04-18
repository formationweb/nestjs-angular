import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Post } from "./entities/post.entity";
import { PostsController } from "./posts.controller";
import { PostsService } from "./posts.service";

@Module({
    controllers: [PostsController],
    providers: [PostsService],
    imports: [SequelizeModule.forFeature([ Post ])]
})
export class PostsModule {}