/* eslint-disable @typescript-eslint/no-inferrable-types */
import {
  ApiProperty,
  ApiPropertyOptional,
} from '@nestjs/swagger/dist/decorators';
import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  validate,
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

export class FilterQueryDto {
  @ApiPropertyOptional({ description: 'search by authors full name' })
  @IsString()
  @Transform((t) => t.value.toLowerCase())
  author: string = '';

  @ApiPropertyOptional({ description: 'search by text' })
  @IsString()
  @Transform((t) => t.value.toLowerCase())
  text: string = '';

  @ApiPropertyOptional({
    default: '1970-01-01T00:00:00.001Z',
    description: 'search tweets from date',
  })
  @IsDateString()
  dateFrom: string = '1970-01-01T00:00:00.001Z';

  @ApiPropertyOptional({
    default: new Date().toISOString(),
    description: 'search tweets to date',
  })
  @IsDateString()
  dateTo: string = new Date().toISOString();

  @ApiPropertyOptional({ default: 0, description: 'get tweets from index' })
  @IsNumber()
  @Transform((t) => +t.value)
  from: number = 0;

  @ApiPropertyOptional({ default: 10, description: 'tweets count' })
  @IsNumber()
  @IsOptional()
  @Transform((t) => +t.value)
  count: number = 10;

  @ApiPropertyOptional({
    default: 10,
    description: 'search by hashtags. Comma separated items',
    type: 'string',
    example: '#js,#datamola',
  })
  @Transform((t) => t.value.split(','))
  @IsString({ each: true })
  hashtags: string[] = [];
}
