import { Injectable } from '@nestjs/common';
import { LoginDto } from 'src/entities/dto/login.dto';

@Injectable()
export class LoginService {
  login = (userData: LoginDto) => {
    return 'user data is';
    // throw new HttpException(
    //   'incorrect login or password',
    //   HttpStatus.FORBIDDEN,
    // );
  };
}
