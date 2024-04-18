import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Query, UsePipes } from "@nestjs/common";
import { ErrorMessage } from "../core/enums/error";
import { CustomIntPipe } from "../core/pipes/custom-int.pipe";
import { EmailValidationPipe } from "../core/pipes/email.pipe";
import { PostsService } from "../posts/posts.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService,
        private postsService: PostsService
    ) { }

    @Get()
    findAll(@Query('search') search: string): Promise<User[]> {
        return this.usersService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id', CustomIntPipe) userId: number): Promise<User> {
        const user = await this.usersService.findOne(userId)
        if (!user) {
            throw new NotFoundException(ErrorMessage.NotFoundUser)
        }
        return user
    }

    // @Get(':id/posts')
    // findPosts(@Param('id', CustomIntPipe) userId: string) {
    //     return this.postsService.findPostsOfUser(+userId)
    // }

    // @Put
    @Post()
    @UsePipes(EmailValidationPipe)
    @HttpCode(201)
    create(@Body() payload: CreateUserDto): Promise<User> {
        return this.usersService.create(payload)
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id', CustomIntPipe) userId: number): Promise<void> {
        await this.usersService.delete(userId)
    }
}