import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/db/prisma.service';
import { StorePostDto } from '@/dto/posts/storePostDto';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async store(storePostDtp: StorePostDto) {
    console.log({ storePostDtp });
    try {
      return await this.prisma.post.create({
        data: {
          authorId: storePostDtp.userSub.sub,
          content: storePostDtp.content,
        },
        include: {
          author: {
            select: {
              id: true,
              email: true,
              username: true,
            },
          },
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
        include: {
          author: true,
        },
      });
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
