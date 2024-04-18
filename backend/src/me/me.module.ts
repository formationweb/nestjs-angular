import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { MeController } from './me.controller';

@Module({
    controllers: [MeController],
    providers: [UsersService],
    imports: [SequelizeModule.forFeature([ User ]), JwtModule.register({
        secret: 'toto'
      })]
})
export class MeModule {}
