import { Body, Controller, Get, HttpException, Post } from "@nestjs/common";
import { StorePostDto } from '@/dto/posts/storePostDto';
import { PostsService } from '@/src/posts/posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Post('/store')
  createPost(@Body() storePostDto: StorePostDto) {
    if (!storePostDto.content) {
      throw new HttpException('Content is required', 400);
    }
    return this.postService.store(storePostDto);
  }

  @Get("/latest-posts")
  async getLatestPosts() {
    return await this.postService.getLatestPosts();
  }
}
