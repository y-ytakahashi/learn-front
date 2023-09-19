import {Injectable} from '@nestjs/common';
import {User} from "@prisma/client";
import * as bcrypt from "bcrypt";
import {PrismaService} from "@/db/prisma.service";
import {RegisterUserDto} from "@/dto/auth/registerUser.dto";


@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {
    }

    getAuth(): string {
        return 'auth';
    }

    async registerUser(registerUserDto: RegisterUserDto): Promise<User> {

        const {username, password, email} = registerUserDto;
        const hashedPassword = await bcrypt.hash(password, 10);

        return this.prisma.user.create({
            data: {
                username,
                password: hashedPassword,
                email
            }
        });

    }
}
