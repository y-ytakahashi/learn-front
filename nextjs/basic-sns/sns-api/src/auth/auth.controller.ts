import {Body, Controller, Get, HttpException, Post} from '@nestjs/common';
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

    @Post("/login")
    loginUser(@Body() {email, password}: { email: string, password: string }) {
        const state = this.authService.login({email, password});
        if (!state) {
            throw new HttpException(state, 401)
        }
        return state;


    }
}
