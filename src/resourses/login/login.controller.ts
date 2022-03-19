import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RoutePath } from 'src/entities/common/enum';
import { LoginDto } from 'src/entities/dto/login.dto';
import { LoginService } from './login.service';

@Controller(RoutePath.login)
export class LoginController {
  constructor(private loginService: LoginService) {}
  @Post()
  @UsePipes(new ValidationPipe())
  login(@Body() loginDto: LoginDto) {
    return this.loginService.login(loginDto);
  }
}
