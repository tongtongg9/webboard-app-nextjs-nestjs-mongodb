import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user.schema';
import { omit } from 'lodash';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<UserDocument>,
    ) {}

    async create(
        createUserDto: CreateUserDto,
    ): Promise<Omit<User, 'password'>> {
        const findExistingUser = await this.findByEmail(createUserDto.email);

        if (findExistingUser) {
            throw new NotFoundException('User already exists');
        }

        const createdUser = new this.userModel(createUserDto);
        const newUser = await createdUser.save();
        return omit(newUser.toObject({ versionKey: false }), ['password']);
    }

    async findAll(): Promise<Omit<User, 'password'>[]> {
        const users = await this.userModel
            .find({}, { password: 0, __v: 0 })
            .exec();

        return users;
    }

    async findById(id: string) {
        const user = await this.userModel
            .findById(id, { password: 0, __v: 0 })
            .exec();

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return user;
    }

    async findByEmail(email: string) {
        const user = await this.userModel
            .findOne({ email }, { password: 0, __v: 0 })
            .exec();

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
