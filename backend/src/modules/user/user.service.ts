import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './schema/user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<UserDocument>,
    ) {}

    async create(createUserDto: CreateUserDto): Promise<UserDocument> {
        const findExistingUser = await this.findByUsername(
            createUserDto.username,
        );

        if (findExistingUser) {
            throw new NotFoundException('User already exists');
        }
        const createdUser = new this.userModel(createUserDto);
        return await createdUser.save();
    }

    async findAll(): Promise<UserDocument[]> {
        const users = await this.userModel.find({}, { __v: 0 }).exec();
        return users;
    }
    async findById(id: string): Promise<UserDocument> {
        const user = await this.userModel.findById(id, { __v: 0 }).exec();

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return user;
    }

    async findByUsername(username: string): Promise<UserDocument | null> {
        const user = await this.userModel.findOne({ username }).exec();
        return user;
    }

    async update(id: string, updateUserDto: UpdateUserDto) {
        await this.findById(id);

        await this.userModel
            .updateOne({ _id: id }, { $set: updateUserDto })
            .exec();

        return 'User has been updated successfully';
    }

    async remove(id: string) {
        await this.findById(id);

        await this.userModel.deleteOne({ _id: id }).exec();

        return 'User has been deleted successfully';
    }
}
