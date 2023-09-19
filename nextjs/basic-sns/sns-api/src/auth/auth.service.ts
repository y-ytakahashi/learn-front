import {Injectable} from '@nestjs/common';
import {User} from "@prisma/client";
import * as bcrypt from "bcrypt";
import {PrismaService} from "@/db/prisma.service";
import {RegisterUserDto} from "@/dto/auth/registerUser.dto";
import * as jwt from "jsonwebtoken";


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

    async login({email, password}: { email: string, password: string }) {

        const user = await this.prisma.user.findUnique({where: {email}});

        // ユーザーが存在するかどうか
        if (!user) {
            return Error("Email Not Found");
        }

        // パスワード認証
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return Error("Invalid Password");
        }

        // jwtを返す
        return jwt.sign({userId: user.id}, process.env.JWT_SECRET, {expiresIn: "1d"});

    }


}
