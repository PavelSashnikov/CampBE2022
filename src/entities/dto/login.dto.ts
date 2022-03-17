import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  readonly login: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  readonly password: string;
}
