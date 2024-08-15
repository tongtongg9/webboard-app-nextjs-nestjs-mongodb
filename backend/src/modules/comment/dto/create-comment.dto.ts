import { IsMongoId, IsString } from 'class-validator';

export class CreateCommentDto {
    @IsString()
    readonly content: string;

    @IsString()
    @IsMongoId()
    readonly author_id: string;

    @IsString()
    @IsMongoId()
    readonly post_id: string;
}
