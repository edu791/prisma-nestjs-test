import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Post } from '@prisma/client';
import { ListQueryDto } from '../list-query-params.dto';
import { buildListQueryParams } from '../utils/query-params';

@Injectable()
export class PostService {
  constructor(private db: PrismaService) {}

  async getList(query: ListQueryDto): Promise<Partial<Post>[]> {
    return this.db.post.findMany({
      ...buildListQueryParams(query),
      select: { id: true, title: true },
    });
  }

  async getById(postId: number): Promise<Post> {
    const post = await this.db.post.findUnique({
      where: { id: postId },
      include: { categories: true },
    });
    if (!post) throw new NotFoundException(`Post ID: ${postId} not found`);
    return post;
  }
}
