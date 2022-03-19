import { Injectable } from '@nestjs/common';
import { TweetDto } from 'src/entities/dto/tweet.dto';

@Injectable()
export class TweetService {
  getTweets() {
    return [];
  }

  addTweet(data: TweetDto) {
    return {};
  }

  changeTweet(data: TweetDto, id: string) {
    return {};
  }

  removeTweet(id: string) {
    return { id };
  }
}
