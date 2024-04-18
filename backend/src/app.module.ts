import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { AppController } from "./app.controller";
import { databaseConfig } from "./database/database.config";
import { PostsModule } from "./posts/posts.module";
import { UsersModule } from './users/users.module';

@Module({
    imports: [UsersModule, PostsModule, SequelizeModule.forRoot(databaseConfig)],
    controllers: [AppController]
})
export class AppModule {}