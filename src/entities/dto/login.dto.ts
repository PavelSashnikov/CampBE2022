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

export class LoginResponseDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly token: string;
}

export class RegisterResponseDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  readonly id: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  readonly login: string;
}
