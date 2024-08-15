import { IsMongoId, IsString } from 'class-validator';

export class CreatePostDto {
    @IsString()
    readonly title: string;

    @IsString()
    readonly content: string;

    @IsString()
    @IsMongoId()
    readonly author_id: string;

    @IsString()
    @IsMongoId()
    readonly community_id: string;
}
