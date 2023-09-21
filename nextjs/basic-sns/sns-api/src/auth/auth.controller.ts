import {
  Body,
  Controller,
  Get,
  HttpException,
  Post,
  UseFilters,
} from '@nestjs/common';
import { AuthService } from '@/src/auth/auth.service';
import { RegisterUserDto } from '@/dto/auth/registerUser.dto';
import { AuthExceptionFilter } from '@/src/exceptions/authException.filter';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.authService.getAuth();
  }

  @Post('/register')
  registerUser(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.registerUser(registerUserDto);
  }

  @UseFilters(AuthExceptionFilter)
  @Post('/login')
  async loginUser(
    @Body() { email, password }: { email: string; password: string },
  ) {
    try {
      return await this.authService.login({ email, password });
    } catch (e) {
      throw new HttpException(e.message, 401);
    }
  }

  // @Get('/find')
  // async auth(@Body() subUserDto: SubUserDto) {
  //   return await this.authService.find(subUserDto);
  // }
}
