import {
  Body,
  Controller,
  Get,
  HttpException,
  Post,
  UseGuards,
} from '@nestjs/common';
import { StorePostDto } from '@/dto/posts/storePostDto';
import { PostsService } from '@/src/posts/posts.service';
import { AuthGuard } from '@/src/auth/auth.guard';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @UseGuards(AuthGuard)
  @Post('/store')
  createPost(@Body() storePostDto: StorePostDto) {
    if (!storePostDto.content) {
      throw new HttpException('Content is required', 400);
    }
    return this.postService.store(storePostDto);
  }

  @Get('/latest-posts')
  async getLatestPosts() {
    return await this.postService.getLatestPosts();
  }
}
