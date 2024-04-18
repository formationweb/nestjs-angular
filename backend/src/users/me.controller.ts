import { Body, Controller, Get, Put, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '../core/guards/auth.guard';
import { UpdateUserDto } from '../users/dto/update-user-dto';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';

@Controller('me')
export class MeController {
  constructor(private userService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard)
  me(@Req() req: Request): User {
    return req['user'];
  }

  @Put()
  @UseGuards(AuthGuard)
  update(@Req() req: Request, @Body() payload: UpdateUserDto): Promise<User> {
    return this.userService.update(req['user'].id, payload);
  }
}
