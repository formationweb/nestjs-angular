import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { databaseConfig } from './database/database.config';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    SequelizeModule.forRoot(databaseConfig),
    AuthModule,
    ConfigModule.forRoot()
  ],
  controllers: [AppController],
})
export class AppModule {}
