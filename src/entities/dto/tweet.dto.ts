import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import { IsDate, IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class TweetDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  readonly text: string;
}
