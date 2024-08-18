import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Public } from '../auth/decorators/public.decorator';

@Public() // TODO: Remove this line
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        const newUser = await this.userService.create(createUserDto);

        return {
            message: `User ${newUser.username} has been created successfully`,
            result: newUser,
        };
    }

    @Get()
    async findAll() {
        const users = await this.userService.findAll();

        return { result: users };
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const user = await this.userService.findById(id);
        return { result: user };
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateUserDto: UpdateUserDto,
    ) {
        const result = await this.userService.update(id, updateUserDto);
        return { message: result };
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        const result = await this.userService.remove(id);
        return { message: result };
    }
}
