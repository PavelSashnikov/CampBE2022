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
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { RoutePath } from 'src/entities/common/enum';
import {
  QueryDto,
  TweetDto,
  TweetResponseDto,
} from 'src/entities/dto/tweet.dto';
import { JwtGuard } from 'src/guards/auth.guard';
import { TweetService } from './tweet.service';

@Controller(RoutePath.tweet)
export class TweetController {
  constructor(private tweetService: TweetService) {}

  @Get()
  @ApiOkResponse({ type: TweetResponseDto, isArray: true })
  getTweets() {
    return this.tweetService.getTweets();
  }

  @Post()
  @ApiOkResponse({ type: TweetResponseDto })
  @UseGuards(new JwtGuard())
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ValidationPipe())
  addTweet(@Body() data: TweetDto, @Headers('Authorization') token: string) {
    return this.tweetService.addTweet(data, token);
  }

  @Put(':id')
  @ApiOkResponse({ type: TweetResponseDto })
  @UseGuards(new JwtGuard())
  @UsePipes(new ValidationPipe())
  changeTweet(
    @Body() data: TweetDto,
    @Query() params: QueryDto,
    @Param('id') id: string,
    @Headers('Authorization') token: string,
  ) {
    return this.tweetService.changeTweet(data, id, token);
  }

  @Delete(':id')
  @UseGuards(new JwtGuard())
  @HttpCode(HttpStatus.NO_CONTENT)
  @UsePipes(new ValidationPipe())
  removeTweet(
    @Query() params: QueryDto,
    @Param('id') id: string,
    @Headers('Authorization') token: string,
  ) {
    return this.tweetService.removeTweet(id, token);
  }
}
