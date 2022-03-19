import { Injectable } from '@nestjs/common';
import { TweetDto } from 'src/entities/dto/tweet.dto';

@Injectable()
export class CommentService {
  addComment(data: TweetDto, tweetId: string) {
    return { tweetId };
  }

  changeComment(data: TweetDto, id: string, tweetId: string) {
    return { id, tweetId };
  }

  removeComment(id: string, tweetId: string) {
    return { id, tweetId };
  }
}
