import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweet } from 'DB/entities/tweet.entity';
import { authConf } from 'src/config/config';
import { TweetService } from '../tweet/tweet.service';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => authConf(configService),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([Tweet]),
  ],
  providers: [CommentService, TweetService],
  controllers: [CommentController],
})
export class CommentModule {}
