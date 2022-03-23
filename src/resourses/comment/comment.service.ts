import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { TweetDto } from 'src/entities/dto/tweet.dto';
import { ITweet } from 'src/entities/interface/tweet.interface';
import { TweetService } from '../tweet/tweet.service';

@Injectable()
export class CommentService {
  constructor(
    private tweetService: TweetService,
    private jwtService: JwtService,
  ) {}
  addComment = async (data: TweetDto, tweetId: string, token: string) => {
    const tweet = await this.tweetService.getTweetById(tweetId);
    const info = this.jwtService.decode(token.split(' ')[1]) as {
      login: string;
    };

    if (!info) {
      throw new HttpException(
        'Cant decode token',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const comment = {
      ...data,
      createdAt: new Date(),
      author: info.login,
    } as ITweet.Comment;

    tweet?.comments.push(comment);
    return this.tweetService.saveTweet(tweet);
  };

  changeComment = async (data: TweetDto, id: string, tweetId: string) => {
    const tweet = await this.tweetService.getTweetById(tweetId);
    const comment = tweet.comments.find((e) => e.id === id);
    if (!comment) {
      throw new NotFoundException(
        `comment with ID ${id} not found at tweet with ID ${tweetId}`,
      );
    }
    comment.text = data.text;

    this.tweetService.saveTweet(tweet);
  };

  removeComment = async (id: string, tweetId: string) => {
    const tweet = await this.tweetService.getTweetById(tweetId);
    const ind = tweet.comments.findIndex((e) => e.id === id);
    tweet.comments.splice(ind, 1);

    return this.tweetService.saveTweet(tweet);
  };
}
