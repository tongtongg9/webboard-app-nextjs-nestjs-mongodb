import { IsString } from 'class-validator';

export class CreateCommunityDto {
    @IsString()
    readonly name: string;
}
