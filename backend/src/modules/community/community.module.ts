import { Module } from '@nestjs/common';
import { CommunityService } from './community.service';
import { CommunityController } from './community.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CommunitySchema } from './schema/community.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Community', schema: CommunitySchema },
        ]),
    ],
    controllers: [CommunityController],
    providers: [CommunityService],
})
export class CommunityModule {}
