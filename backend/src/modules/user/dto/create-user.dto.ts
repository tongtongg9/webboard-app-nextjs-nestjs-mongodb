import { IsString } from 'class-validator';

export class CreateUserDto {
    @IsString()
    readonly username: string;

    @IsString()
    readonly first_name: string;

    @IsString()
    readonly last_name: string;
}
