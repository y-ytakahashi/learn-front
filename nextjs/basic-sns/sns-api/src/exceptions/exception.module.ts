import {Module} from "@nestjs/common";
import {AuthExceptionFilter} from "@/src/exceptions/authException.filter";

@Module({
    imports: [],
    providers: [{ provide: 'AUTH_FILTER', useClass: AuthExceptionFilter }],
})
export class ExceptionModule {}