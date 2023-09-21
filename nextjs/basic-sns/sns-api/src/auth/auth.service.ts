import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '@/db/prisma.service';
import { RegisterUserDto } from '@/dto/auth/registerUser.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  getAuth(): string {
    return 'auth';
  }

  async registerUser(registerUserDto: RegisterUserDto): Promise<User> {
    const { username, password, email } = registerUserDto;
    const hashedPassword = await bcrypt.hash(password, 10);

    return this.prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        email,
      },
    });
  }

  async login({ email, password }: { email: string; password: string }) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    // ユーザーが存在するかどうか
    if (!user) {
      throw new Error('Email Not Found');
    }

    // パスワード認証
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid Password');
    }

    const payload = {
      sub: user.id,
      username: user.username,
      email: user.email,
    };

    // jwtを返す
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
