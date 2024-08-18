import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { PostModule } from './modules/post/post.module';
import { CommentModule } from './modules/comment/comment.module';
import { CommunityModule } from './modules/community/community.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module';
import configuration from './config/configuration';

@Module({
    imports: [
        // config module
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration],
        }),

        // mongoose module
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get<string>('MONGO_URI'),
                user: configService.get<string>('MONGO_USER'),
                pass: configService.get<string>('MONGO_PASSWORD'),
                dbName: configService.get<string>('MONGO_DB_NAME'),
            }),
            inject: [ConfigService],
        }),

        // modules
        AuthModule,
        UserModule,
        PostModule,
        CommentModule,
        CommunityModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
