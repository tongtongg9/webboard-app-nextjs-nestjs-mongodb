import {
    BadRequestException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { omit } from 'lodash';
import { UserDocument } from '../user/schema/user.schema';
import { AccessToken } from './types/access-token';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) {}

    async signIn(signInDto: SignInDto) {
        console.log('sign in', signInDto);
        const user = await this.userService.findByUsername(signInDto.username);

        if (!user) {
            throw new UnauthorizedException();
        }

        const payload = { username: user.username, id: user._id };

        const access_token = await this.jwtService.signAsync(payload);

        return { access_token };
    }
}
