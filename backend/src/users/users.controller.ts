import { BadRequestException, Body, Controller, Get, HttpCode, Param, Post } from "@nestjs/common";
import { ErrorMessage } from "../core/enums/error";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    findAll() {
        return this.usersService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') userId: string) {
        if (!(+userId > 0)) {
            throw new BadRequestException(ErrorMessage.BadId)
        }
        return this.usersService.findOne(+userId)
    }

    @Post()
    @HttpCode(201)
    create(@Body() payload) {
        return this.usersService.create(payload)
    }
}