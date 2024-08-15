import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { CommunityService } from './community.service';
import { CreateCommunityDto } from './dto/create-community.dto';
import { UpdateCommunityDto } from './dto/update-community.dto';

@Controller('community')
export class CommunityController {
    constructor(private readonly communityService: CommunityService) {}

    @Post()
    async create(@Body() createCommunityDto: CreateCommunityDto) {
        const newCommunity =
            await this.communityService.create(createCommunityDto);

        return {
            message: `Community ${newCommunity.name} has been created successfully`,
            result: newCommunity,
        };
    }

    @Get()
    async findAll() {
        const communities = await this.communityService.findAll();
        return { result: communities };
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const community = await this.communityService.findById(id);
        return { result: community };
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateCommunityDto: UpdateCommunityDto,
    ) {
        const result = await this.communityService.update(
            id,
            updateCommunityDto,
        );
        return { message: result };
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        const result = await this.communityService.remove(id);
        return { message: result };
    }
}
