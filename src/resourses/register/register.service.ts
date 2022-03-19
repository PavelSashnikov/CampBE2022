import { Injectable } from '@nestjs/common';
import { LoginDto } from 'src/entities/dto/login.dto';

@Injectable()
export class RegisterService {
  reg = (userData: LoginDto) => {
    return 'reg data is';
  };
}
