import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }

  getHelloNestJs(): string {
    return "Hello NestJs!";
  }
}
