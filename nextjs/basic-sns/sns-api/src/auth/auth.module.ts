import {Module} from '@nestjs/common';
import {AuthController} from "@/src/auth/auth.controller";
import {AuthService} from "@/src/auth/auth.service";
import {PrismaService} from "@/db/prisma.service";
import {AuthExceptionFilter} from "@/src/exceptions/authException.filter";

@Module({
    imports: [],
    controllers: [AuthController],
    providers: [AuthService, PrismaService, AuthExceptionFilter]
})
export class AuthModule {
}
