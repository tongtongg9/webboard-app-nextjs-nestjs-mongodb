import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { UserService } from '../user/user.service';
import { AccessTokenPayload } from './types/access-token-payload';
import { SignInDto } from './dto/sign-in.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private userService: UserService,
    ) {}

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('sign-in')
    async signIn(@Body() signInDto: SignInDto) {
        const result = await this.authService.signIn(signInDto);
        return result;
    }

    @Get('profile')
    async getProfile(@Request() req: { user: AccessTokenPayload }) {
        const user = await this.userService.findById(req.user.id);
        return user;
    }
}
