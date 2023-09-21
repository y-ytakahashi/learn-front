import { Module } from '@nestjs/common';
import { PostsController } from '@/src/posts/posts.controller';
import { PrismaService } from '@/db/prisma.service';
import { PostsService } from '@/src/posts/posts.service';

@Module({
  imports: [],
  controllers: [PostsController],
  providers: [PrismaService, PostsService],
})
export class PostsModule {}
