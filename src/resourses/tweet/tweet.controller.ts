import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RoutePath } from 'src/entities/common/enum';
import { TweetDto } from 'src/entities/dto/tweet.dto';
import { TweetService } from './tweet.service';

@Controller(RoutePath.tweet)
export class TweetController {
  constructor(private tweetService: TweetService) {}

  @Get()
  getTweets() {
    return this.tweetService.getTweets();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  addTweet(@Body() data: TweetDto) {
    return this.tweetService.addTweet(data);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  changeTweet(@Body() data: TweetDto, @Param('id') id: string) {
    return this.tweetService.changeTweet(data, id);
  }

  @Delete(':id')
  @UsePipes(new ValidationPipe())
  removeTweet(@Param('id') id: string) {
    return this.tweetService.removeTweet(id);
  }
}
