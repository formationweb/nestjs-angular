import { Controller, Get, NotFoundException, Param, Query } from "@nestjs/common";
import { ErrorMessage } from "../core/enums/error";
import { PostsService } from "./posts.service";

@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) {}

    @Get()
    findAll(@Query('search') search?: string) {
        return this.postsService.findAll(search)
    }

    @Get(':postId')
    findOne(@Param('postId') postId: string) {
        const post = this.postsService.findOne(+postId)
        if (!post) {
            throw new NotFoundException(ErrorMessage.NotFoundPost)
        }
        return post
    }
}
