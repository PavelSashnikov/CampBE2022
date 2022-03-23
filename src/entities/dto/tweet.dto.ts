import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import {
  IsDefined,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { ITweet } from '../interface/tweet.interface';

class CommentResponseDto implements ITweet.Comment {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  id: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  text: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  createdAt: Date;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  author: string;
}

export class TweetDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  readonly text: string;
}

export class TweetResponseDto implements ITweet.Tweet {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  id: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  text: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  createdAt: Date;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  author: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({ type: Array(CommentResponseDto) })
  comments: ITweet.Comment[];
}

export class QueryDto {
  @IsDefined()
  @IsUUID()
  id: string;

  @IsOptional()
  @IsUUID()
  tweetId: string;
}
