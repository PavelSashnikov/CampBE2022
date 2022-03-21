import { Module } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { TweetController } from './tweet.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { authConf } from 'src/config/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => authConf(configService),
      inject: [ConfigService],
    }),
  ],
  providers: [TweetService],
  controllers: [TweetController],
})
export class TweetModule {}
