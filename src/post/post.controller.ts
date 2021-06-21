import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { Post } from '@prisma/client';
import { ListQueryDto } from '../list-query-params.dto';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async list(@Query() query: ListQueryDto): Promise<Partial<Post>[]> {
    return this.postService.getList(query);
  }

  @Get(':postId')
  async getById(@Param('postId', ParseIntPipe) postId: number): Promise<Post> {
    return this.postService.getById(postId);
  }
}
