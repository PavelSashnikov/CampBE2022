import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RoutePath } from 'src/entities/common/enum';
import { TweetDto } from 'src/entities/dto/tweet.dto';
import { CommentService } from './comment.service';

@Controller(`${RoutePath.tweet}/:tweetId/${RoutePath.comment}`)
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  addComment(@Body() data: TweetDto, @Param() tweetId: string) {
    return this.commentService.addComment(data, tweetId);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  changeComment(
    @Body() data: TweetDto,
    @Param('id') id: string,
    @Param('tweetId') tweetId: string,
  ) {
    return this.commentService.changeComment(data, id, tweetId);
  }

  @Delete(':id')
  @UsePipes(new ValidationPipe())
  removeComment(@Param('tweetId') tweetId: string, @Param('id') id: string) {
    return this.commentService.removeComment(id, tweetId);
  }
}
