import { BadRequestException, Body, Controller, Get, HttpCode, Param, Post, Query } from "@nestjs/common";
import { ErrorMessage } from "../core/enums/error";
import { PostsService } from "../posts/posts.service";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService,
        private postsService: PostsService
    ) { }

    @Get()
    findAll(@Query('search') search: string) {
        return this.usersService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') userId: string) {
        if (!(+userId > 0)) {
            throw new BadRequestException(ErrorMessage.BadId)
        }
        return this.usersService.findOne(+userId)
    }

    @Get(':id/posts')
    findPosts(@Param('id') userId: string) {
        return this.postsService.findPostsOfUser(+userId)
    }

    @Post()
    @HttpCode(201)
    create(@Body() payload) {
        return this.usersService.create(payload)
    }
}