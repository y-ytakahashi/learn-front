import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/db/prisma.service';
import { StorePostDto } from '@/dto/posts/storePostDto';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async store(storePostDtp: StorePostDto) {
    try {
      return await this.prisma.post.create({
        data: {
          authorId: 'b39941f1-0e00-493e-ab91-733afe41b8df',
          content: storePostDtp.content,
        },
      });
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async getLatestPosts() {
    try {
      return await this.prisma.post.findMany({
        take: 10,
        orderBy: { createdAt: 'desc' },
      });
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
