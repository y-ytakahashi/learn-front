import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '@/src/auth/auth.module';
import { CorsMiddleware } from '@/src/middleware/cors.middleware';
import { PostsModule } from './posts/posts.module';
import { TokenMiddleware } from '@/src/middleware/token.middleware';
import { AuthService } from '@/src/auth/auth.service';
import { PrismaService } from '@/db/prisma.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join, resolve } from 'path';

@Module({
  imports: [
    AuthModule,
    PostsModule,
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, '../statics'),
      serveRoot: '/statics',
    }),
  ],
  controllers: [AppController],
  providers: [AuthService, AppService, PrismaService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes('*');
    consumer.apply(TokenMiddleware).forRoutes('/hello', '/posts/*');
  }
}
