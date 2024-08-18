import { IsOptional, IsString } from 'class-validator';

export class QueryPostDto {
    // @IsString()
    // readonly title: string;

    // @IsString()
    // readonly content: string;

    @IsString()
    @IsOptional()
    readonly community: string;

    @IsString()
    @IsOptional()
    readonly author: string;

    @IsString()
    @IsOptional()
    readonly search: string;
}
