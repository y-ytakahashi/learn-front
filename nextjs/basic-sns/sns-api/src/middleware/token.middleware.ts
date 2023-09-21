import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';

import process from 'process';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    console.log('Middleware is called');
    const token = this.extractTokenFromHeader(req);
    if (!token) {
      throw new UnauthorizedException('Token is valid');
    }
    try {
      const payload = this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });
      console.log('Middle Ware', { payload });
      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      req['user'] = payload;
    } catch (e) {}
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
