import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { RoutePath } from 'src/entities/common/enum';
import { LoginDto, RegisterResponseDto } from 'src/entities/dto/login.dto';
import { RegisterService } from './register.service';

@Controller(RoutePath.reg)
export class RegisterController {
  constructor(private regService: RegisterService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @ApiOkResponse({ type: RegisterResponseDto })
  reg(@Body() RegDto: LoginDto) {
    return this.regService.reg(RegDto);
  }
}
