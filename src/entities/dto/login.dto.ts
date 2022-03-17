import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  readonly login: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  readonly password: string;
}
