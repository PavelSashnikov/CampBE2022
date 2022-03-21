import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RoutePath } from 'src/entities/common/enum';
import { TweetDto } from 'src/entities/dto/tweet.dto';
import { JwtGuard } from 'src/guards/auth.guard';
import { TweetService } from './tweet.service';

@Controller(RoutePath.tweet)
@UseGuards(new JwtGuard())
export class TweetController {
  constructor(private tweetService: TweetService) {}

  @Get()
  getTweets() {
    return this.tweetService.getTweets();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ValidationPipe())
  addTweet(@Body() data: TweetDto, @Headers('Authorization') token: string) {
    return this.tweetService.addTweet(data, token);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  changeTweet(@Body() data: TweetDto, @Param('id') id: string) {
    return this.tweetService.changeTweet(data, id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UsePipes(new ValidationPipe())
  removeTweet(@Param('id') id: string) {
    return this.tweetService.removeTweet(id);
  }
}
