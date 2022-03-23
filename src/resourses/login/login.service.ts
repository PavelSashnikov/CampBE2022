import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { compare } from 'bcrypt';
import { User } from 'DB/entities/user.entity';
import { LoginDto, LoginResponseDto } from 'src/entities/dto/login.dto';
import { Repository } from 'typeorm';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private readonly jwtSevice: JwtService,
  ) {}
  login = async (userData: LoginDto): Promise<LoginResponseDto> => {
    const user = await this.usersRepository.findOne({
      where: { login: userData.login },
      select: ['login', 'password'],
    });

    if (!user || !(await compare(userData.password, user.password))) {
      throw new HttpException(
        'incorrect login or password',
        HttpStatus.FORBIDDEN,
      );
    }

    const token = this.jwtSevice.sign({ id: user.id, login: user.login });
    return { token };
  };
}
