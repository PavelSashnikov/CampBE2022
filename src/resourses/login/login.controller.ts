import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { RoutePath } from 'src/entities/common/enum';
import { LoginDto, LoginResponseDto } from 'src/entities/dto/login.dto';
import { LoginService } from './login.service';

@Controller(RoutePath.login)
export class LoginController {
  constructor(private loginService: LoginService) {}
  @Post()
  @UsePipes(new ValidationPipe())
  @ApiOkResponse({ type: LoginResponseDto })
  login(@Body() loginDto: LoginDto) {
    return this.loginService.login(loginDto);
  }
}
