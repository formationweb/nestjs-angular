import { Body, Controller, Get, HttpCode, NotFoundException, Param, Post, Query, Req, UseGuards } from "@nestjs/common";
import type { Request } from 'express';
import { ErrorMessage } from "../core/enums/error";
import { AuthGuard } from "../core/guards/auth.guard";
import { CustomIntPipe } from "../core/pipes/custom-int.pipe";
import { CreatePostDto } from "./dto/create-post.dto";
import { Post as PostEntity } from "./entities/post.entity";
import { PostsService } from "./posts.service";

@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) {}

    @Get()
    findAll(@Query('search') search?: string): Promise<PostEntity[]> {
        return this.postsService.findAll(search)
    }

    @Post()
    @HttpCode(201)
    @UseGuards(AuthGuard)
    create(@Body() payload: CreatePostDto, @Req() req: Request): Promise<PostEntity> {
        return this.postsService.create({
            ...payload,
            userId: req['user'].id
        })
    }

    @Get(':postId')
    findOne(@Param('postId', CustomIntPipe) postId: number): Promise<PostEntity> {
        const post = this.postsService.findOne(postId)
        if (!post) {
            throw new NotFoundException(ErrorMessage.NotFoundPost)
        }
        return post
    }
}
