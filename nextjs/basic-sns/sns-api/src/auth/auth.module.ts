import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AuthController } from '@/src/auth/auth.controller';
import { AuthService } from '@/src/auth/auth.service';
import { PrismaService } from '@/db/prisma.service';
import { AuthExceptionFilter } from '@/src/exceptions/authException.filter';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, AuthExceptionFilter],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {}
}
