import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
  Headers,
  Query,
} from '@nestjs/common';
import { RoutePath } from 'src/entities/common/enum';
import { QueryDto, TweetDto } from 'src/entities/dto/tweet.dto';
import { CommentService } from './comment.service';

@Controller(`${RoutePath.tweet}/:tweetId/${RoutePath.comment}`)
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ValidationPipe())
  addComment(
    @Body() data: TweetDto,
    @Query() params: QueryDto,
    @Param('tweetId') tweetId: string,
    @Headers('Authorization') token: string,
  ) {
    return this.commentService.addComment(data, tweetId, token);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  changeComment(
    @Body() data: TweetDto,
    @Query() params: QueryDto,
    @Param('id') id: string,
    @Param('tweetId') tweetId: string,
    @Headers('Authorization') token: string,
  ) {
    return this.commentService.changeComment(data, id, tweetId, token);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UsePipes(new ValidationPipe())
  removeComment(
    @Query() params: QueryDto,
    @Param('tweetId') tweetId: string,
    @Param('id') id: string,
    @Headers('Authorization') token: string,
  ) {
    return this.commentService.removeComment(id, tweetId, token);
  }
}
