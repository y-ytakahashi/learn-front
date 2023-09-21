import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '@/src/auth/auth.module';
import { CorsMiddleware } from '@/src/middleware/cors.middleware';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [AuthModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes('*');
  }
}
