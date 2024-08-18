import { IsString, IsOptional } from 'class-validator';

export class QueryCommunityDto {
    @IsString()
    @IsOptional()
    readonly community: string;
}
