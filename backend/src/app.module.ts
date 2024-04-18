import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { databaseConfig } from './database/database.config';
import { MeModule } from './me/me.module';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    SequelizeModule.forRoot(databaseConfig),
    AuthModule,
    MeModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
