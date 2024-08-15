import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommunityDto } from './dto/create-community.dto';
import { UpdateCommunityDto } from './dto/update-community.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommunityDocument } from './schema/community.schema';

@Injectable()
export class CommunityService {
    constructor(
        @InjectModel('Community')
        private readonly communityModel: Model<CommunityDocument>,
    ) {}

    async create(createCommunityDto: CreateCommunityDto) {
        const createdCommunity = new this.communityModel(createCommunityDto);
        const newCommunity = await createdCommunity.save();
        return newCommunity;
    }

    async findAll() {
        const communities = await this.communityModel.find().exec();
        return communities;
    }

    async findById(id: string) {
        const community = await this.communityModel.findById(id).exec();

        if (!community) {
            throw new NotFoundException('Community not found');
        }

        return community;
    }

    async update(id: string, updateCommunityDto: UpdateCommunityDto) {
        await this.findById(id);

        await this.communityModel
            .updateOne({ _id: id }, { $set: updateCommunityDto })
            .exec();

        return `Community has been updated successfully`;
    }

    async remove(id: string) {
        await this.findById(id);

        await this.communityModel.deleteOne({ _id: id }).exec();

        return `Community has been deleted successfully`;
    }
}
