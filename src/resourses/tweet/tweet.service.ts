import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Tweet } from 'DB/entities/tweet.entity';
import { TweetDto } from 'src/entities/dto/tweet.dto';
import { ITweet } from 'src/entities/interface/tweet.interface';
import { Repository } from 'typeorm';

@Injectable()
export class TweetService {
  constructor(
    @InjectRepository(Tweet)
    private tweetsRepository: Repository<Tweet>,
    private jwtService: JwtService,
  ) {}

  getTweets = async () => {
    return await this.tweetsRepository.find();
  };

  addTweet = async (data: TweetDto, token: string) => {
    const info = this.jwtService.decode(token.split(' ')[1]) as {
      login: string;
    };

    if (!info) {
      throw new HttpException(
        'Cant decode token',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    const tweet = {
      ...data,
      createdAt: new Date(),
      author: info.login,
      comments: [],
    };
    return await this.tweetsRepository.save(tweet);
  };

  changeTweet = async (data: TweetDto, id: string, token: string) => {
    const tweet = await this.getTweetById(id);

    const info = this.jwtService.decode(token.split(' ')[1]) as {
      login: string;
    };

    if (tweet.author !== info.login) {
      throw new HttpException(
        'Hey! its not your tweet!',
        HttpStatus.BAD_REQUEST,
      );
    }

    tweet.text = data.text;

    return await this.tweetsRepository.save(tweet);
  };

  removeTweet = async (id: string, token: string) => {
    const tweet = await this.getTweetById(id);

    const info = this.jwtService.decode(token.split(' ')[1]) as {
      login: string;
    };

    if (tweet.author !== info.login) {
      throw new HttpException(
        'Hey! its not your tweet!',
        HttpStatus.BAD_REQUEST,
      );
    }

    return await this.tweetsRepository.remove(tweet);
  };

  getTweetById = async (id: string) => {
    const t = await this.tweetsRepository.findOneBy({ id });
    if (!t) {
      throw new NotFoundException(`tweet with ID ${id} not found`);
    }
    return t;
  };

  saveTweet = async (data: ITweet.Tweet) => {
    return await this.tweetsRepository.save(data);
  };
}
