import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RoutePath } from 'src/entities/common/enum';
import { LoginDto } from 'src/entities/dto/login.dto';
import { RegisterService } from './register.service';

@Controller(RoutePath.reg)
export class RegisterController {
  constructor(private regService: RegisterService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  login(@Body() RegDto: LoginDto) {
    return this.regService.reg(RegDto);
  }
}
