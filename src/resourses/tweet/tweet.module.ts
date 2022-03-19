import { Module } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { TweetController } from './tweet.controller';

@Module({
  providers: [TweetService],
  controllers: [TweetController]
})
export class TweetModule {}
