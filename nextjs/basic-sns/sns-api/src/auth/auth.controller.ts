import {Body, Controller, Get, Post} from '@nestjs/common';
import {AuthService} from "@/src/auth/auth.service";
import {RegisterUserDto} from "@/dto/auth/registerUser.dto";

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) {
    }

    @Get()
    getHello(): string {
        return this.authService.getAuth();
    }

    @Post("/register")
    registerUser(
        @Body() registerUserDto: RegisterUserDto
    ) {
        return this.authService.registerUser(registerUserDto);
    }
}
