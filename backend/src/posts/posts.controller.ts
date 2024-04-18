import { Body, Controller, Get, HttpCode, NotFoundException, Param, Post, Query } from "@nestjs/common";
import { ErrorMessage } from "../core/enums/error";
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
    create(@Body() payload: CreatePostDto): Promise<PostEntity> {
        return this.postsService.create({
            ...payload,
            userId: 1
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
